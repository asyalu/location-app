import { FC } from 'react';
import { Main } from './pages/Main';
import { SearchLocationProvider } from './contexts/SearchLocationContext';

const App: FC = () => (
  <SearchLocationProvider>
    <Main />
  </SearchLocationProvider>
);

export { App };
