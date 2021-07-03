import Image from 'next/image';
import Link from 'next/link';
import {
  BTContainer,
  BTContent,
  BTHeading,
  BTImageContainer,
  BTPara,
  Comment,
  PublishDate,
  Footer,
} from '../../../styles/blog/blogsStyles';
import { Button, Flex } from '../../../styles/blog/globalStyles';

export default function BlogThumb({ slug, type, title, excerpt, date, image }) {
  const publishDate = new Date(date);
  const month = publishDate.toLocaleString('en-US', { month: 'long' });
  const day = publishDate.toLocaleString('en-US', { month: '2-digit' });
  const year = publishDate.getFullYear();
  return (
    <BTContainer type={type}>
      <Flex column>
        <BTImageContainer>
          <Image
            src={'https:' + image.fields.file.url}
            layout='fill'
            objectFit='cover'
          />
        </BTImageContainer>
        <BTContent>
          <BTHeading>{title}</BTHeading>
          <BTPara>{excerpt}</BTPara>
          <div>
            <Link href={`/blog/${slug}`}>
              <a>
                <Button>Read More</Button>
              </a>
            </Link>
          </div>
          <Footer>
            <PublishDate>
              {month} {day} {year}
            </PublishDate>
          </Footer>
        </BTContent>
      </Flex>
    </BTContainer>
  );
}
