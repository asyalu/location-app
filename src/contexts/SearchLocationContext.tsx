import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { IIpStackResponse } from '../api/loader';
import { ISearchItem } from '../interfaces/searchItem';

interface SearchLocationContextType {
  searchLocation: IIpStackResponse | null;
  setUserLocation: (data: IIpStackResponse) => void;
  searchHistory: ISearchItem[];
  setSearchHistory: (history: ISearchItem[]) => void;
}

const SearchLocationContext = createContext<SearchLocationContextType>({
  searchLocation: null,
  setUserLocation: () => {},
  searchHistory: [],
  setSearchHistory: () => {},
});

const useSearchLocationContext = () => useContext(SearchLocationContext);

const SearchLocationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [searchLocation, setUserLocation] = useState<IIpStackResponse | null>(
    null
  );
  const [searchHistory, setSearchHistory] = useState<ISearchItem[]>([]);

  return (
    <SearchLocationContext.Provider
      value={{
        searchLocation,
        setUserLocation,
        searchHistory,
        setSearchHistory,
      }}
    >
      {children}
    </SearchLocationContext.Provider>
  );
};

export { useSearchLocationContext, SearchLocationProvider };
