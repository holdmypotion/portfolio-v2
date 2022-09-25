import {
  Container,
  ContentContainer,
  Heading,
  ImageContainer,
  TagsContainer,
  Body,
  Tag,
  SocialContainer,
  InfoContainer,
} from "../../../styles/blog/articleStyles";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import CodeBlock from "../../utils/codeBlock/codeBlock";
import Comments from "./comments";

export default function Article({ article }) {
  const router = useRouter();
  if (!article) return <h1>loading</h1>;
  const { title, publishDate, featuredImage, body, tags } = article.fields;
  const date = new Date(publishDate);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { month: "2-digit" });
  const year = date.getFullYear();
  return (
    <Container>
      <ImageContainer>
        <Image
          src={"https:" + featuredImage.fields.file.url}
          layout="fill"
          objectFit="cover"
          alt={featuredImage.fields.title}
        />
      </ImageContainer>
      <ContentContainer>
        <Heading>{title}</Heading>
        <TagsContainer>
          {tags.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </TagsContainer>
        <InfoContainer>
          <span>
            {month} {day} {year}
          </span>
          <SocialContainer>
            <TwitterShareButton
              title={title}
              hashtags={["100DaysOfCode", "DEVCommunity"]}
              children={<TwitterIcon size={24} borderRadius={2} />}
              url={`https://www.rahsand.tech/${router.asPath}`}
            />
            <FacebookShareButton
              quote={title}
              hashtags={["100DaysOfCode", "DEVCommunity"]}
              children={<FacebookIcon size={24} borderRadius={2} />}
              url={`https://www.rahsand.tech/${router.asPath}`}
            />
            {/* <LinkedinShareButton
              title={title}
              hashtags={['100DaysOfCode', 'DEVCommunity']}
              children={<LinkedinIcon size={24} borderRadius={2} />}
              url={`https://www.rahsand.tech/${router.asPath}`}
            /> */}
            <RedditShareButton
              title={title}
              children={<RedditIcon size={24} borderRadius={2} />}
              url={`https://www.rahsand.tech/${router.asPath}`}
            />
          </SocialContainer>
        </InfoContainer>
        <Body id="article">
          <ReactMarkdown children={body} components={CodeBlock} />
        </Body>

        <Comments />
      </ContentContainer>
    </Container>
  );
}
