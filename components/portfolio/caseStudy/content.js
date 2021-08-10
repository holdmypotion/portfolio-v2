import Image from 'next/image';
import {
  AboutContainer,
  AboutHeading,
  AboutPara,
  AboutParaContainer,
  Container,
  ImageContainer,
  Images,
  Wrapper,
} from '../../../styles/portfolio/caseStudyStyles';
export default function Content({ about, images }) {
  return (
    <Container>
      <AboutContainer>
        <AboutHeading>
          About this <br /> project
        </AboutHeading>
        <AboutParaContainer>
          <AboutPara>{about}</AboutPara>
        </AboutParaContainer>
      </AboutContainer>
      <Images>
        {images.map(image => (
          <ImageContainer>
            <Image
              src={image}
              width={1280}
              height={750}
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
            />
          </ImageContainer>
        ))}
      </Images>
    </Container>
  );
}
