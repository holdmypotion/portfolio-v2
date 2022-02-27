import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSectionContainer = styled(motion.div)`
  position: relative;
  background-color: ${props => props.theme.primary};
  min-height: 100vh;
`;

export const ImageContainer = styled.div`
  position: static;
  @media (min-width: 1080px) {
    width: 40vw;
    padding-top: 4vh;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const ImageWrapper = styled.div`
  /* position: relative;

  @media (min-width: 1080px) {
    width: 100%;
  } */
`;

export const Header = styled(motion.div)`
  position: relative;
  padding-top: 15vh;
  z-index: 10;
  /* mix-blend-mode: difference; */
`;

export const Text = styled.h1`
  color: ${props => props.theme.gray};
  font-size: calc(3rem + 1vw);
  font-weight: normal;
  text-transform: none;

  & h2 {
    font-size: calc(3rem + 1vw);
    font-weight: normal;
    padding-left: 0.4vw;
  }

  & h1 {
    color: ${props => props.theme.gray};
    font-size: calc(3rem + 6vw);
    font-weight: 800;
    text-transform: uppercase;
    line-height: calc(3rem + 6vw);
  }

  & .designer {
    margin-left: 10vw;
  }

  & p {
    padding-top: calc(0.8rem + 0.2vw);
    padding-left: 0.3vw;
    font-size: calc(2rem + 1vw);
    @media (min-width: 1080px) {
      padding-left: 5vw;
      max-width: 50vw;
    }
  }

  @media (min-width: 1600px) {
    & h2 {
      font-size: calc(6rem + 1vw);
    }

    & h1 {
      font-size: calc(6rem + 6vw);
      line-height: calc(6rem + 6vw);
    }

    & p {
      font-size: calc(4rem + 1vw);
      max-width: 55vw;
    }
  }
`;

export const AboutContainer = styled.div`
  padding: 20vh 0;
  background-color: ${props => props.theme.primary};
`;

export const AboutText = styled.h1`
  font-family: Open Sans;
  font-size: calc(2rem + 5vw);
  font-weight: normal;
  color: ${props => props.theme.gray};
  padding-bottom: 1rem;
  text-transform: none;
  letter-spacing: -0.05em;
  & span {
    font-weight: 700;
  }
`;

export const Links = styled.p`
  padding: 2rem 0;
  color: ${props => props.theme.gray};
  font-size: calc(1rem + 0.5vw);

  & div {
    font-weight: 700;
  }
`;

export const Item = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${props => props.theme.white};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: ${props => props.theme.white};
    transition: transform 0.5s ease-in-out;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
