import Image from 'next/image';
import Link from 'next/link';
import {
  BTContainer,
  BTContent,
  BTHeading,
  BTImageContainer,
  BTPara,
  Comment,
  Date,
  Footer,
} from '../../../styles/blog/blogsStyles';
import { Button, Flex } from '../../../styles/blog/globalStyles';

export default function BlogThumb({ type, para }) {
  return (
    <BTContainer type={type}>
      <Flex column>
        <BTImageContainer>
          <Image src='/images/image.png' layout='fill' objectFit='cover' />
        </BTImageContainer>
        <BTContent>
          <BTHeading>Title</BTHeading>
          <BTPara>{para}</BTPara>
          <div>
            <Button>Read More</Button>
          </div>
          <Footer>
            <Date>FEBRUARY 18, 2021</Date>
            <Link href='/'>
              <a>
                <Comment>
                  <Flex center>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 15 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.5 0.9375C3.35742 0.9375 0 3.66504 0 7.03125C0 8.48437 0.626953 9.81445 1.66992 10.8604C1.30371 12.3369 0.0791016 13.6523 0.0644531 13.667C0 13.7344 -0.0175781 13.834 0.0205078 13.9219C0.0585937 14.0098 0.140625 14.0625 0.234375 14.0625C2.17676 14.0625 3.63281 13.1309 4.35352 12.5566C5.31152 12.917 6.375 13.125 7.5 13.125C11.6426 13.125 15 10.3975 15 7.03125C15 3.66504 11.6426 0.9375 7.5 0.9375Z'
                        fill='#F7B48C'
                      />
                    </svg>
                    <span>13</span>
                  </Flex>
                </Comment>
              </a>
            </Link>
          </Footer>
        </BTContent>
      </Flex>
    </BTContainer>
  );
}
