import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import { ListOfSearches } from './ListOfSearches';
import { useSearchLocationContext } from '../../contexts/SearchLocationContext';

jest.mock('../../contexts/SearchLocationContext', () => ({
  useSearchLocationContext: jest.fn(),
}));

const mockSearchHistory = [
  { id: 1, query: 'Search query 1' },
  { id: 2, query: 'Search query 2' },
];

test('renders list of searches with data', () => {
  useSearchLocationContext.mockReturnValue({
    historySearchData: mockSearchHistory,
  });

  render(<ListOfSearches />);

  const headingElement = screen.getByText('List of searches');
  expect(headingElement).toBeInTheDocument();

  const searchQuery1 = screen.getByText('Search query 1');
  const searchQuery2 = screen.getByText('Search query 2');
  expect(searchQuery1).toBeInTheDocument();
  expect(searchQuery2).toBeInTheDocument();
});

test('renders message for empty search history', () => {
  useSearchLocationContext.mockReturnValue({
    historySearchData: [],
  });

  render(<ListOfSearches />);

  const messageElement = screen.getByText(
    'You have not searched for anything yet...'
  );
  expect(messageElement).toBeInTheDocument();
});
