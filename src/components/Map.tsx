import { FC, useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface IMap {
  center: {
    lat: number;
    lng: number;
  };
}

const containerStyle = {
  width: '400px',
  height: '400px',
};

const defaultOptions = {
  streetViewControl: false,
  fullscreenControl: false,
};

const Map: FC<IMap> = ({ center }): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY!,
  });

  const mapRef = useRef<google.maps.Map | undefined>(undefined);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = undefined;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
    >
      <>1</>
    </GoogleMap>
  ) : (
    <span>Loading...</span>
  );
};

export { Map };
