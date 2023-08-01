import { FC } from 'react';
import { ILocationInfo } from '../interfaces/locationInfo';

const LocationInfo: FC<ILocationInfo> = ({
  city,
  country,
  ip,
}): JSX.Element => {
  return (
    <div className="h-30% w-30% bg-gray-100 p-4 rounded-lg shadow">
      <p>
        <span className="font-bold">City:</span> {city}
      </p>
      <p>
        <span className="font-bold">Country:</span> {country}
      </p>
      <p>
        <span className="font-bold">IP:</span> {ip}
      </p>
    </div>
  );
};

export { LocationInfo };
