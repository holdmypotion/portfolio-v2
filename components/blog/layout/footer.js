import {
  Container,
  Heading,
  Item,
  Menu,
  Para,
} from '../../../styles/blog/footerStyles';
import { Flex } from '../../../styles/blog/globalStyles';
import Social from './social';

export default function Footer() {
  return (
    <Container>
      <Flex column center>
        <Heading>Welcome</Heading>
        <Para>
          Liked my blog? You would definitely cherish my newsletters. Do Sign
          up, it’s FREE.
        </Para>
        <div>Newsletter</div>
        <Menu>
          <Item>Portfolio</Item>
          <Item>Contact</Item>
        </Menu>
        <Social />
      </Flex>
    </Container>
  );
}
