import Image from 'next/image';
import { Container } from '../../../styles/portfolio/globalStyles';
import {
  ContentContainer,
  Header,
  Heading,
  ImageContainer,
  ImageWrapper,
  JustExtraHeight,
  Para,
  ServiceBox,
  ServicesContainer,
  ServiceSection,
  StickyWrapper,
  SubHeading,
  SubTitle,
  Title,
} from '../../../styles/portfolio/servicesStyles';

export default function Services({ services }) {
  const servicesSection = services.map(service => (
    <ServiceSection key={service.title}>
      <Title>{service.title}</Title>
      {service.subServices.map((service, index) => (
        <ServiceBox key={service.subTitle}>
          <SubTitle>
            {index + 1}. {service.subTitle}
          </SubTitle>
          <Para>{service.description}</Para>
        </ServiceBox>
      ))}
    </ServiceSection>
  ));

  return (
    <Container>
      <ServicesContainer>
        <StickyWrapper>
          <Header>
            <SubHeading>Seems Interested?</SubHeading>
            <Heading>Services</Heading>
          </Header>
        </StickyWrapper>
        <StickyWrapper>
          <ImageWrapper>
            <ImageContainer>
              <Image
                src={'/images/imageLight.png'}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </ImageContainer>
          </ImageWrapper>
        </StickyWrapper>
        <ContentContainer>{servicesSection}</ContentContainer>
      </ServicesContainer>

      <JustExtraHeight></JustExtraHeight>
    </Container>
  );
}
