import { FC } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { IMap } from '../../interfaces/map';

const containerStyle = {
  width: '300px',
  height: '200px',
};

const defaultOptions = {
  streetViewControl: false,
  fullscreenControl: false,
};

const Map: FC<IMap> = ({ center }): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY as string,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={defaultOptions}
    >
      <MarkerF position={center} />
    </GoogleMap>
  ) : (
    <span>Loading...</span>
  );
};

export { Map };
