import { useEffect, useState } from 'react';
import { Map } from '../components/Map';
import { IIpStackResponse, getLocation } from '../api/loader';

const center = {
  lat: 52.22,
  lng: 21.01,
};

const Main = () => {
  const [map, setMap] = useState<IIpStackResponse | null>(null);

  const setLocation = async () => {
    const data = await getLocation();
    setMap(data);
  };

  useEffect(() => {
    setLocation();
  }, []);

  return (
    <div>
      <Map center={center} />
    </div>
  );
};

export { Main };
