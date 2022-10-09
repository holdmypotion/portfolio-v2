import Image from 'next/image';
import { useState } from 'react';
import {
  Flex,
  H1,
  StickyContainer,
  FullContainer,
  ToggleContainer,
  ToggleButton,
  TBContainer,
} from '../../../styles/blog/globalStyles';
import {
  Container,
  Content,
  Logo,
  LogoImageContainer,
} from '../../../styles/blog/sideBarStyles';
import { LogoContainer } from '../../../styles/portfolio/layoutStyles';
import SearchBar from './searchBar';
import TagSection from './tagSection';
import Backdrop from '../UI/backdrop';
import Link from 'next/link';
import TableOfContent from '../mainContent/tableOfContent';

export default function SideBar({ type }) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <StickyContainer>
      <div className='animationContainer'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
      {showSideBar && (
        <Backdrop show={showSideBar} clicked={() => setShowSideBar(false)} />
      )}
      <ToggleContainer>
        <TBContainer left>
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
                transform: showSideBar ? 'rotate(180deg)' : '',
              }}
            >
              <path
                d='M9.2947 17.2946C8.90543 16.9053 8.90509 16.2743 9.29393 15.8846L12.4653 12.7063C12.8548 12.316 12.8548 11.684 12.4653 11.2937L9.29393 8.11538C8.90509 7.72569 8.90543 7.09466 9.2947 6.70538C9.68428 6.31581 10.3159 6.31581 10.7055 6.70538L15.293 11.2929C15.6835 11.6834 15.6835 12.3166 15.293 12.7071L10.7055 17.2946C10.3159 17.6842 9.68428 17.6842 9.2947 17.2946Z'
                fill='#313131'
              />
            </svg>
          </ToggleButton>
        </TBContainer>
        <Container
          style={{
            transform: showSideBar ? 'translateX(0)' : 'translateX(-350px)',
          }}
        >
          <Flex column center>
            <LogoContainer>
              <Link href={'/blog'}>
                <a>
                  <Image src={'/logo.png'} width={60} height={40} />
                  <div>
                    <h3>Rahul Sharma</h3>
                    <h3>Developer / Designer</h3>
                  </div>
                </a>
              </Link>
            </LogoContainer>

            {type === 'home' && (
              <Content>
                <SearchBar />
                <TagSection />
              </Content>
            )}
            {type === 'article' && <TableOfContent />}
          </Flex>
        </Container>
      </ToggleContainer>
      <FullContainer>
        <Container>
          <Flex column center>
            <LogoContainer>
              <Link href={'/blog'}>
                <a>
                  <Image src={'/logo.png'} width={60} height={40} />
                  <div>
                    <h3>Rahul Sharma</h3>
                    <h3>Developer / Designer</h3>
                  </div>
                </a>
              </Link>
            </LogoContainer>
            {type === 'home' && (
              <Content>
                <SearchBar />
                <TagSection />
              </Content>
            )}
            {type === 'article' && <TableOfContent />}
          </Flex>
        </Container>
      </FullContainer>
    </StickyContainer>
  );
}
