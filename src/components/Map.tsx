import { FC } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { IMap } from '../interfaces/map';

const containerStyle = {
  width: '300px',
  height: '200px',
};

const defaultOptions = {
  streetViewControl: false,
  fullscreenControl: false,
};

const Map: FC<IMap> = ({ lat, lng }): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY as string,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat, lng }}
      zoom={10}
      options={defaultOptions}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  ) : (
    <span>Loading...</span>
  );
};

export { Map };
