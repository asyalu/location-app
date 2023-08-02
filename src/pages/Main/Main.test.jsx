import '@testing-library/jest-dom/extend-expect';
import { render, screen, act } from '@testing-library/react';
import { Main } from './Main';
import { useSearchLocationContext } from '../../contexts/SearchLocationContext';
import { fetchLocationData } from '../../services/apiService';

jest.mock('../../contexts/SearchLocationContext', () => ({
  useSearchLocationContext: jest.fn(),
}));

jest.mock('../../services/apiService', () => ({
  fetchLocationData: jest.fn(),
}));

const mockLocationData = {
  latitude: 12.34,
  longitude: -43.21,
  city: 'London',
  country_name: 'UK',
  ip: '123.555.01.33',
};

const mockHistory = {
  id: 1,
  query: '44.6666.12.4400',
};

beforeEach(async () => {
  fetchLocationData.mockResolvedValue(mockLocationData);

  useSearchLocationContext.mockReturnValue({
    locationSearchData: [mockLocationData],
    historySearchData: [mockHistory],
  });

  await act(async () => {
    render(<Main />);
  });
});

test('matches Main component snapshot', () => {
  const { asFragment } = render(<Main />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders Main component with user location data', async () => {
  const locationInfoElement = await screen.findByText(
    'Information about user location'
  );
  expect(locationInfoElement).toBeInTheDocument();
});
