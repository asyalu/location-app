import { FC } from 'react';
import { useSearchLocationContext } from '../../contexts/SearchLocationContext';
import { ISearchItem } from '../../interfaces/searchItem';

const ListOfSearches: FC = (): JSX.Element => {
  const { historySearchData } = useSearchLocationContext();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 bg-gray-100 p-2 rounded-lg shadow">
        List of searches
      </h2>
      {historySearchData.length ? (
        <ul className="space-y-2 ">
          {historySearchData.map((item: ISearchItem) => (
            <li
              key={item.id}
              className="bg-white p-2 rounded-lg shadow cursor-pointer hover:bg-gray-200"
            >
              {item.query}
            </li>
          ))}
        </ul>
      ) : (
        <span className="text-gray-500 flex items-center justify-center h-full">
          You have not searched for anything yet...
        </span>
      )}
    </div>
  );
};

export { ListOfSearches };
