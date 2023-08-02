import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { IIpStackResponse } from '../api/loader';
import { ISearchItem } from '../interfaces/searchItem';

interface SearchLocationContextType {
  locationSearchData: IIpStackResponse | null;
  setLocationSearchData: (data: IIpStackResponse) => void;
  historySearchData: ISearchItem[];
  setHistorySearchData: (history: ISearchItem[]) => void;
}

const SearchLocationContext = createContext<SearchLocationContextType>({
  locationSearchData: null,
  setLocationSearchData: () => {},
  historySearchData: [],
  setHistorySearchData: () => {},
});

const useSearchLocationContext = () => useContext(SearchLocationContext);

const SearchLocationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [locationSearchData, setLocationSearchData] =
    useState<IIpStackResponse | null>(null);
  const [historySearchData, setHistorySearchData] = useState<ISearchItem[]>([]);

  return (
    <SearchLocationContext.Provider
      value={{
        locationSearchData,
        setLocationSearchData,
        historySearchData,
        setHistorySearchData,
      }}
    >
      {children}
    </SearchLocationContext.Provider>
  );
};

export { useSearchLocationContext, SearchLocationProvider };
