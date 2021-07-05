import SearchContextProvider from './search-context';
import FilterContextProvider from './filter-context';
import ThemeContextProvider from './theme-context';

export default function Context({ children }) {
  return (
    <ThemeContextProvider>
      <SearchContextProvider>
        <FilterContextProvider>{children}</FilterContextProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  );
}
