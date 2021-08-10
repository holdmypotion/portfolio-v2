import { useContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Container,
  Form,
  Heading,
  Input,
  InputContainer,
  Item,
  Menu,
  Para,
  SwitchButton,
} from '../../../styles/blog/footerStyles';
import {
  Button,
  Flex,
  StickyContainer,
  FullContainer,
  ToggleContainer,
  ToggleButton,
  TBContainer,
} from '../../../styles/blog/globalStyles';
import Social from './social';
import Backdrop from '../UI/backdrop';
import { ThemeContext } from '../../../store/theme-context';

const transition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };

export default function Footer() {
  const [showSideBar, setShowSideBar] = useState();
  const { theme, themeSwitchHandler } = useContext(ThemeContext);

  return (
    <StickyContainer>
      {showSideBar && (
        <Backdrop show={showSideBar} clicked={() => setShowSideBar(false)} />
      )}
      <ToggleContainer>
        <TBContainer right>
          <ToggleButton
            py='2px'
            px='6px'
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <svg
              width='30'
              height='30'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{
                transition: '0.8s',
                transform: showSideBar ? '' : 'rotate(180deg)',
              }}
            >
              <path
                d='M9.2947 17.2946C8.90543 16.9053 8.90509 16.2743 9.29393 15.8846L12.4653 12.7063C12.8548 12.316 12.8548 11.684 12.4653 11.2937L9.29393 8.11538C8.90509 7.72569 8.90543 7.09466 9.2947 6.70538C9.68428 6.31581 10.3159 6.31581 10.7055 6.70538L15.293 11.2929C15.6835 11.6834 15.6835 12.3166 15.293 12.7071L10.7055 17.2946C10.3159 17.6842 9.68428 17.6842 9.2947 17.2946Z'
                fill='#313131'
              />
            </svg>
          </ToggleButton>
        </TBContainer>
        <AnimatePresence>
          {showSideBar && (
            <Container
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={transition}
            >
              <Flex column center>
                <Heading>Welcome!</Heading>
                <Para>
                  Liked my blog? <br />
                  You would definitely love my newsletter. <br /> Do sign up,
                  it’s FREE.
                </Para>

                <Form
                  action='https://tinyletter.com/holdmypotion'
                  method='post'
                  target='popupwindow'
                  onsubmit="window.open('https://tinyletter.com/holdmypotion', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
                >
                  <InputContainer>
                    <Input
                      type='text'
                      name='email'
                      id='tlemail'
                      placeholder='Email Address'
                    />
                    <span>
                      <i></i>
                    </span>
                  </InputContainer>
                  <Button type='submit'>Subscribe</Button>
                </Form>
                <Menu>
                  <Item>
                    <Link href='/'>
                      <a>Portfolio</a>
                    </Link>
                  </Item>
                  <Item>
                    <Link href='/'>
                      <a>Contact</a>
                    </Link>
                  </Item>
                </Menu>
                <Social />
                <SwitchButton>
                  <input
                    type='checkbox'
                    onChange={() =>
                      themeSwitchHandler(theme === 'dark' ? 'light' : 'dark')
                    }
                  />
                  <span></span>
                </SwitchButton>
              </Flex>
            </Container>
          )}
        </AnimatePresence>
      </ToggleContainer>
      <FullContainer>
        <Container>
          <Flex column center>
            <Heading>Welcome!</Heading>
            <Para>
              Liked my blog? <br />
              You would definitely cherish my newsletters. <br /> Do sign up,
              it’s FREE.
            </Para>

            <Form
              action='https://tinyletter.com/holdmypotion'
              method='post'
              target='popupwindow'
              onsubmit="window.open('https://tinyletter.com/holdmypotion', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
            >
              <InputContainer>
                <Input
                  type='text'
                  name='email'
                  id='tlemail'
                  placeholder='Email Address'
                />
                <span>
                  <i></i>
                </span>
              </InputContainer>
              <Button type='submit'>Subscribe</Button>
            </Form>
            <Menu>
              <Item>
                <Link href='/'>
                  <a>Portfolio</a>
                </Link>
              </Item>
              <Item>
                <Link href='/'>
                  <a>Contact</a>
                </Link>
              </Item>
            </Menu>
            <Social />
            <SwitchButton>
              <input
                type='checkbox'
                onChange={() =>
                  themeSwitchHandler(theme === 'dark' ? 'light' : 'dark')
                }
              />
              <span></span>
            </SwitchButton>
          </Flex>
        </Container>
      </FullContainer>
    </StickyContainer>
  );
}
