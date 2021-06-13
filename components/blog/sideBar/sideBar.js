import { Flex, H1, StickyContainer } from '../../../styles/blog/globalStyles';
import { Container } from '../../../styles/blog/sideBarStyles';
import SearchBar from './searchBar';
import TagSection from './TagSection';

export default function Sidebar() {
  return (
    <StickyContainer>
      <Container>
        <Flex column center>
          <H1>LOGO</H1>
          <SearchBar />
          <TagSection />
        </Flex>
      </Container>
    </StickyContainer>
  );
}
