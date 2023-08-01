import { FC, FormEvent, useState } from 'react';
import { useSearchLocationContext } from '../contexts/SearchLocationContext';
import { fetchLocationData } from '../services/apiService';

const SearchBox: FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const { searchHistory, setUserLocation, setSearchHistory } =
    useSearchLocationContext();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetchLocationData(searchValue);

    setUserLocation(response);

    setSearchHistory([
      { id: Date.now(), query: searchValue },
      ...searchHistory,
    ]);

    setSearchValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="h-10% w-full bg-gray-100 p-4 flex items-center">
        <input
          type="text"
          className="w-3/4 border border-gray-300 p-2 mr-2 rounded"
          placeholder="Enter IP or URL..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export { SearchBox };
