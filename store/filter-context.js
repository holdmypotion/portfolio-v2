import { useState, createContext } from 'react';

export const FilterContext = createContext({
  tags: [],
  tagSelector: () => {},
});

const FilterContextProvider = props => {
  const [tags, setTags] = useState([]);

  const tagSelector = tagsList => {
    setTags(tagsList);
  };

  return (
    <FilterContext.Provider value={{ tags: tags, tagSelector: tagSelector }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
