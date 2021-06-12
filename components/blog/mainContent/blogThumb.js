import Image from 'next/image';
import {
  BTContainer,
  BTContent,
  BTHeading,
  BTImageContainer,
  BTPara,
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
        </BTContent>
      </Flex>
    </BTContainer>
  );
}
