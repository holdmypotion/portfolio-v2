import Image from 'next/image';
import {
  ContentContainer,
  HeroContainer,
  SubHeading,
  Block,
  Para,
  Title,
  FeaturedImageContainer,
} from '../../../styles/portfolio/caseStudyStyles';

export default function Hero({ featuredImage, title, myRole, client, year }) {
  return (
    <HeroContainer>
      <FeaturedImageContainer>
        <Image
          src={featuredImage}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </FeaturedImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Block>
          <SubHeading>MY ROLe</SubHeading>
          {myRole.map(role => (
            <Para>{role}</Para>
          ))}
        </Block>
        <Block>
          <SubHeading>Client</SubHeading>
          <Para>{client}</Para>
        </Block>
        <Block>
          <SubHeading>Year</SubHeading>
          <Para>{year}</Para>
        </Block>
      </ContentContainer>
    </HeroContainer>
  );
}
