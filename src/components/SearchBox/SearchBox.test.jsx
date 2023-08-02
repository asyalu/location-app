import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { SearchBox } from './SearchBox';
import { useSearchLocationContext } from '../../contexts/SearchLocationContext';
import { fetchLocationData } from '../../services/apiService';

const mockLocationData = {
  latitude: 12.34,
  longitude: -43.21,
  city: 'London',
  country_name: 'UK',
  ip: '123.555.01.33',
};

const setUserLocation = jest.fn();
const setSearchHistory = jest.fn();

jest.mock('../../contexts/SearchLocationContext', () => ({
  useSearchLocationContext: jest.fn(),
}));

jest.mock('../../services/apiService', () => ({
  fetchLocationData: jest.fn(),
}));

beforeEach(() => {
  useSearchLocationContext.mockReturnValue({
    searchHistory: [],
    setUserLocation,
    setSearchHistory,
  });

  render(<SearchBox />);
});

test('renders the search box', () => {
  const inputElement = screen.getByPlaceholderText('Enter IP or URL...');
  const submitButton = screen.getByText('Search');

  expect(inputElement).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('handles form submission', async () => {
  fetchLocationData.mockResolvedValue(mockLocationData);

  const inputElement = screen.getByPlaceholderText('Enter IP or URL...');
  const submitButton = screen.getByText('Search');

  fireEvent.change(inputElement, { target: { value: '192.168.1.1' } });

  await act(async () => {
    fireEvent.click(submitButton);
  });

  await act(async () => {
    expect(setUserLocation).toHaveBeenCalledWith(mockLocationData);
    expect(setSearchHistory).toHaveBeenCalledWith([
      { id: expect.any(Number), query: '192.168.1.1' },
    ]);
  });
});
