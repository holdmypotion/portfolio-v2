import styled from 'styled-components';

export const ServicesContainer = styled.div`
  padding: 4rem 0;
  position: relative;
`;

export const StickyWrapper = styled.div`
  @media (min-width: 1080px) {
    top: 20vh;
    position: sticky;
  }
`;

export const Header = styled.div`
  @media (min-width: 1080px) {
    position: absolute;
    display: inline-block;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
`;

export const SubHeading = styled.h3`
  font-family: Antonio;
  font-size: calc(1rem + 0.5vw);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${props => props.theme.primary};
  padding-left: 0.8rem;
`;

export const Heading = styled.h1`
  font-family: Antonio;
  font-weight: bold;
  font-size: calc(3rem + 5vw);
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: ${props => props.theme.grayLight};
  @media (min-width: 1080px) {
    font-size: calc(11rem + 5vw);
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 6px;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 5;
  @media (min-width: 1080px) {
    width: 40vw;
    margin: 0 auto;
  }
`;

export const ServiceSection = styled.div`
  margin: 5vh 0;
`;

export const Title = styled.h2`
  font-family: Antonio;
  font-weight: bold;
  font-size: calc(1rem + 4vw);
  text-transform: uppercase;
  color: ${props => props.theme.primary};
`;

export const ServiceBox = styled.div`
  padding: 2vh 0;
`;

export const SubTitle = styled.div`
  font-family: Antonio;
  font-weight: bold;
  padding-left: 2rem;
  font-size: calc(1rem + 2vw);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${props => props.theme.primary};
`;

export const Para = styled.p`
  font-family: Open Sans;
  font-weight: 600;
  font-size: calc(1rem + 0.5vw);
  letter-spacing: 0.04em;
  padding-top: 1rem;
  padding-left: 2rem;
  color: rgba(244, 149, 92, 0.8);
`;

export const ImageWrapper = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  @media (min-width: 1080px) {
    display: block;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 40vh;
  width: 30vw;
`;

export const JustExtraHeight = styled.div`
  @media (min-width: 1080px) {
    height: 50vh;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  margin: auto;
  z-index: 2;
  transition: 1s all ease;
`;
