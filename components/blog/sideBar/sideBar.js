import { Flex, H1 } from '../../../styles/blog/globalStyles';
import { Container } from '../../../styles/blog/sideBarStyles';
import SearchBar from './searchBar';

export default function Sidebar() {
  return (
    <Container>
      <Flex column center>
        <H1>LOGO</H1>
        <SearchBar />
        {/* <TagSection /> */}
      </Flex>
    </Container>
  );
}
