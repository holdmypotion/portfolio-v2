import SearchContextProvider from './search-context';
import FilterContextProvider from './filter-context';

export default function Context({ children }) {
  return (
    <SearchContextProvider>
      <FilterContextProvider>{children}</FilterContextProvider>
    </SearchContextProvider>
  );
}
