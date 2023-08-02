import { useEffect, useState } from 'react';
import { Map } from '../../components/Map/Map';
import { IIpStackResponse } from '../../api/loader';
import { ListOfSearches } from '../../components/ListOfSearches/ListOfSearches';
import { LocationInfo } from '../../components/LocationInfo/LocationInfo';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { useSearchLocationContext } from '../../contexts/SearchLocationContext';
import { fetchLocationData } from '../../services/apiService';

const Main = () => {
  const [userLocation, setUserLocationInfo] = useState<
    IIpStackResponse | undefined
  >();
  const { searchLocation } = useSearchLocationContext();

  const getUserLocationInfo = async () => {
    const response = await fetchLocationData();

    setUserLocationInfo(response);
  };

  useEffect(() => {
    getUserLocationInfo();
  }, []);

  return (
    <div className="h-full flex p-5">
      <div className="w-1/3 mt-5 p-4 rounded-lg shadow">
        <ListOfSearches />
      </div>
      <div className="w-full flex flex-col gap-5 p-5">
        <div className="w-full flex gap-5">
          {userLocation ? (
            <>
              <div className="w-full flex justify-center bg-white p-4 rounded-lg shadow">
                <Map
                  lat={userLocation.latitude}
                  lng={userLocation.longitude}
                />
              </div>
              <div className="w-full bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">
                  Information about user location
                </h2>
                <LocationInfo
                  city={userLocation.city}
                  country={userLocation.country_name}
                  ip={userLocation.ip}
                />
              </div>
            </>
          ) : (
            <span className="text-gray-500">Loading user location...</span>
          )}
        </div>
        <div className="w-full">
          <SearchBox />
        </div>
        {searchLocation ? (
          <div className="w-full flex gap-5">
            <div className="w-full flex justify-center bg-white p-4 rounded-lg shadow">
              <Map
                lat={searchLocation.latitude}
                lng={searchLocation.longitude}
              />
            </div>
            <div className="w-full bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">
                Information about search location
              </h2>
              <LocationInfo
                city={searchLocation.city}
                country={searchLocation.country_name}
                ip={searchLocation.ip}
              />
            </div>
          </div>
        ) : (
          <span className="text-gray-500 flex items-center justify-center h-30%">
            Waiting for your search to display the data...
          </span>
        )}
      </div>
    </div>
  );
};

export { Main };
