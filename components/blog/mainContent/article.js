import {
  Container,
  ContentContainer,
  Heading,
  ImageContainer,
  TagsContainer,
  Body,
  Tag,
  PublishDate,
} from '../../../styles/blog/articleStyles';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import CodeBlock from '../../utils/codeBlock/codeBlock';
import Comments from './comments';

export default function Article({ article }) {
  if (!article) return <h1>loading</h1>;
  const { title, publishDate, featuredImage, body, tags } = article.fields;
  const date = new Date(publishDate);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { month: '2-digit' });
  const year = date.getFullYear();
  return (
    <Container>
      <ImageContainer>
        <Image
          src={'https:' + featuredImage.fields.file.url}
          layout='fill'
          objectFit='cover'
        />
      </ImageContainer>
      <ContentContainer>
        <Heading>{title}</Heading>
        <TagsContainer>
          {tags.map(tag => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </TagsContainer>
        <PublishDate>
          <span>
            {month} {day} {year}
          </span>
        </PublishDate>
        <Body id='article'>
          <ReactMarkdown children={body} components={CodeBlock} />
        </Body>
        <Comments />
      </ContentContainer>
    </Container>
  );
}
