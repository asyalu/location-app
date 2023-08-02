import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { LocationInfo } from './LocationInfo';

const mockData = {
  city: 'New York',
  country: 'United States',
  ip: '192.168.0.1',
};

beforeEach(() => {
  render(<LocationInfo {...mockData} />);
});

test('renders LocationInfo with provided data', () => {
  const cityElement = screen.getByText('New York');
  const countryElement = screen.getByText('United States');
  const ipElement = screen.getByText('192.168.0.1');

  expect(cityElement).toBeInTheDocument();
  expect(countryElement).toBeInTheDocument();
  expect(ipElement).toBeInTheDocument();
});

test('renders LocationInfo with empty data', () => {
  const cityElement = screen.getByText('City:');
  const countryElement = screen.getByText('Country:');
  const ipElement = screen.getByText('IP:');

  expect(cityElement).toBeInTheDocument();
  expect(countryElement).toBeInTheDocument();
  expect(ipElement).toBeInTheDocument();
});
