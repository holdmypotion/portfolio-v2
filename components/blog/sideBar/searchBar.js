import React, { useState } from 'react';
import { Flex } from '../../../styles/blog/globalStyles';
import { SBContainer, SBInput } from '../../../styles/blog/sideBarStyles';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const authContext = useContext(SearchContext);

  // const searchHandler = () => {
  //   authContext.searchHandler(searchQuery);
  // };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     searchHandler();
  //     if (forwarding) {
  //       props.history.push("/search-result");
  //     }
  //   }
  // };

  return (
    <SBContainer>
      <Flex>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.9167 9.66667H10.2583L10.025 9.44166C10.8417 8.49166 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49166 10.8417 9.44166 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z'
            fill='#F1762D'
          />
        </svg>
        <SBInput
          placeholder='Search'
          type='text'
          onChange={e => setSearchQuery(e.target.value)}
          // onKeyPress={(e) => handleKeyPress(e)}
          value={searchQuery}
        />
        <span>
          <i></i>
        </span>
      </Flex>
    </SBContainer>
  );
};

export default SearchBar;
