import {
  Container,
  Form,
  Heading,
  Input,
  Item,
  Menu,
  Para,
} from '../../../styles/blog/footerStyles';
import { Button, Flex } from '../../../styles/blog/globalStyles';
import Social from './social';

export default function Footer() {
  return (
    <Container>
      <Flex column center>
        <Heading>Welcome!</Heading>
        <Para>
          Liked my blog? <br />
          You would definitely cherish my newsletters. <br /> Do sign up, it’s
          FREE.
        </Para>

        <Form
          action='https://tinyletter.com/holdmypotion'
          method='post'
          target='popupwindow'
          onsubmit="window.open('https://tinyletter.com/holdmypotion', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
        >
          <Input
            type='text'
            name='email'
            id='tlemail'
            placeholder='Email Address'
          />
          <Button type='submit'>Subscribe</Button>
        </Form>
        <Menu>
          <Item>Portfolio</Item>
          <Item>Contact</Item>
        </Menu>
        <Social />
      </Flex>
    </Container>
  );
}
