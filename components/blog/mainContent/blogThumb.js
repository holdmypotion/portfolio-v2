import Image from 'next/image';
import {
  BTContainer,
  BTContent,
  BTHeading,
  BTImageContainer,
  BTPara,
} from '../../../styles/blog/blogsStyles';
import { Button, Flex } from '../../../styles/blog/globalStyles';

export default function BlogThumb() {
  return (
    <BTContainer>
      <Flex column>
        <BTImageContainer>
          <Image src='/images/image.png' layout='fill' objectFit='cover' />
        </BTImageContainer>
        <BTContent>
          <BTHeading>Title</BTHeading>
          <BTPara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            sit sem lectus. Pellentesque orci sed ut leo sollicitudin eleifend.
            Magna congue dignissim blandit malesuada quis....
          </BTPara>
          <div>
            <Button>Read More</Button>
          </div>
        </BTContent>
      </Flex>
    </BTContainer>
  );
}
