import Image from 'next/image';
import { Container } from '../../../styles/portfolio/globalStyles';
import {
  Header,
  ImageContainer,
  ImageWrapper,
  HeroSectionContainer,
  Text,
} from '../../../styles/portfolio/heroSectionStyles';

const HeroSection = () => {
  // TODO: Finalize the image issue
  return (
    <HeroSectionContainer>
      <Container>
        <Header>
          <Text>
            <h2 className='intro'>Full Stack</h2>
            <h1 className='bold'>Developer</h1>
            <h1 className='bold designer'>/Designer</h1>
            <p>
              working with startups to help them reach their full potential.
            </p>
          </Text>
        </Header>
        <ImageContainer>
          <ImageWrapper>
            <Image
              src={'/images/giphy.gif'}
              width={805}
              height={1000}
              layout='responsive'
              objectFit='contain'
              objectPosition='center'
            />
          </ImageWrapper>
        </ImageContainer>
      </Container>
    </HeroSectionContainer>
  );
};

export default HeroSection;
