import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Map } from './Map';

test('renders map with provided coordinates', () => {
  const mockCoordinates = { lat: 40.7128, lng: -74.006 };
  const { asFragment } = render(
    <Map
      lat={mockCoordinates.lat}
      lng={mockCoordinates.lng}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
