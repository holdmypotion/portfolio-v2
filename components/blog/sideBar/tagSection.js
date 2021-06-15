import { useState, useContext } from 'react';
import { Flex } from '../../../styles/blog/globalStyles';
import {
  Heading,
  SelectedTag,
  SelectedTagContainer,
  UnselectedTag,
  UnselectedTagBlock,
  UnselectedTagContainer,
} from '../../../styles/blog/sideBarStyles';
import { TAGS } from '../../../data/data';
import { FilterContext } from '../../../store/filter-context';

export default function TagSection() {
  const filterContext = useContext(FilterContext);

  const [unselectedTags, setUnselectedTags] = useState(TAGS);
  const [selectedTags, setSelectedTags] = useState(['rahul']);

  const selectTagHandler = tag => {
    const updatedSelectedTags = selectedTags.concat(tag);
    setSelectedTags(updatedSelectedTags);
    setUnselectedTags(
      unselectedTags.filter(unselectedTag => unselectedTag !== tag)
    );
    filterContext.tagSelector(updatedSelectedTags);
  };

  const unselectTagHandler = tag => {
    setUnselectedTags(unselectedTags.concat(tag));
    const updatedSelectedTags = selectedTags.filter(
      selectedTag => selectedTag !== tag
    );
    setSelectedTags(updatedSelectedTags);
    filterContext.tagSelector(updatedSelectedTags);
  };

  const selectedTagsList = selectedTags.map(tag => (
    <SelectedTag key={tag} onClick={() => unselectTagHandler(tag)}>
      #{tag}
    </SelectedTag>
  ));

  const unselectedTagsList = unselectedTags.map(tag => (
    <UnselectedTagBlock key={tag}>
      <UnselectedTag onClick={() => selectTagHandler(tag)}>
        #{tag}
      </UnselectedTag>
      <div></div>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.2947 17.2946C8.90543 16.9053 8.90509 16.2743 9.29393 15.8846L12.4653 12.7063C12.8548 12.316 12.8548 11.684 12.4653 11.2937L9.29393 8.11538C8.90509 7.72569 8.90543 7.09466 9.2947 6.70538C9.68428 6.31581 10.3159 6.31581 10.7055 6.70538L15.293 11.2929C15.6835 11.6834 15.6835 12.3166 15.293 12.7071L10.7055 17.2946C10.3159 17.6842 9.68428 17.6842 9.2947 17.2946Z'
          fill='#313131'
        />
      </svg>
    </UnselectedTagBlock>
  ));

  return (
    <Flex column>
      <Flex column>
        <Heading>You Selected</Heading>
        <SelectedTagContainer>{selectedTagsList}</SelectedTagContainer>
      </Flex>
      <Flex column>
        <Heading>To Select From</Heading>
        <UnselectedTagContainer>{unselectedTagsList}</UnselectedTagContainer>
      </Flex>
    </Flex>
  );
}
