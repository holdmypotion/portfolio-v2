import { useState, createContext } from 'react';

export const SearchContext = createContext({
  query: '',
  searchHandler: () => {},
});

const SearchContextProvider = props => {
  const [query, setQuery] = useState('');

  const searchHandler = query => {
    setQuery(query.toLowerCase());
  };

  return (
    <SearchContext.Provider
      value={{ query: query, searchHandler: searchHandler }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
