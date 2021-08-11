import styled from 'styled-components';

//////////////////////////////////////
// Hero.js
/////////////////////////////////////
export const HeroContainer = styled.section`
  background-color: ${props => props.theme.gray};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 700px) {
    height: 100vh;
    flex-direction: row;
  }
`;

export const FeaturedImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  margin: auto 0;
  margin-top: 5rem;

  @media (min-width: 700px) {
    height: 80%;
    margin: auto 0;
  }
`;

export const ContentContainer = styled.div`
  height: 80%;
  width: 100%;
  margin: auto 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1500px) {
    padding-left: 4rem;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.primary};
  font-size: calc(5rem + 5vw);
`;

export const Block = styled.div`
  padding: 0.5rem 0;

  @media (min-width: 700px) {
    padding: 1rem 0;
  }
`;

export const SubHeading = styled.h3`
  color: ${props => props.theme.grayLight};
  text-transform: uppercase;
  font-family: Antonio;
  letter-spacing: 0.04rem;
  font-size: calc(1.5rem + 0.8vw);
  padding: 0.5rem 0;
  font-weight: normal;
`;

export const Para = styled.p`
  color: ${props => props.theme.primary};
  font-weight: 600;
  font-size: calc(1rem + 0.5vw);
`;

//////////////////////////////////////
// Content.js
/////////////////////////////////////
export const Container = styled.main`
  max-width: 90%;
  margin: 0 auto;
`;

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const AboutHeading = styled.h1`
  color: ${props => props.theme.grayLight};
  font-size: calc(3rem + 5vw);
  padding-bottom: 1rem;
  text-transform: uppercase;
  width: 90%;
  letter-spacing: -0.05em;
`;

export const AboutParaContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const AboutPara = styled.p`
  color: ${props => props.theme.primary};
  font-size: calc(1rem + 0.5vw);
`;

export const Images = styled.section`
  max-width: 90%;
  margin: 0 auto;
  /* display: flex;
  flex-wrap: wrap; */
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 4rem 0;
  @media (min-width: 700px) {
    margin: 8rem 0;
  }
`;
