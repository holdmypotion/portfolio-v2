import {
  Container,
  ContentContainer,
  Heading,
  ImageContainer,
  TagsContainer,
  Body,
  Tag,
} from '../../../styles/blog/articleStyles';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import CodeBlock from '../../utils/codeBlock/codeBlock';

export default function Article({ article }) {
  if (!article) return <h1>loading</h1>;
  const { title, comments, publishDate, featuredImage, body, tags } =
    article.fields;
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
        <Body id='article'>
          <ReactMarkdown children={body} components={CodeBlock} />
        </Body>
      </ContentContainer>
    </Container>
  );
}
