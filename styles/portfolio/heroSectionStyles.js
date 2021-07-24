import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  background-color: ${props => props.theme.primary};
  height: 100vh;
`;

export const HeaderContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 11;

  @media (min-width: 1200px) {
    z-index: 10;
  }
`;

export const FloatingHeader = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  position: absolute;
  bottom: 10%;

  & h1 {
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
    line-height: 1.05;
    font-size: 7rem;
  }

  @media (min-width: 500px) {
    & h1 {
      font-size: 8rem;
    }
  }

  @media (min-width: 700px) {
    & h1 {
      font-size: 15.4rem;
    }
  }

  @media (min-width: 1200px) {
    inset: 0;

    & h1 {
      -webkit-text-fill-color: ${props => props.theme.gray};
      -webkit-text-stroke-width: 0px;
      -webkit-text-stroke-color: white;
    }
  }

  @media (min-width: 1600px) {
    & h1 {
      font-size: 20rem;
    }
  }

  @media (min-width: 2000px) {
    & h1 {
      font-size: 25rem;
    }
  }
`;

export const Developer = styled(motion.h1)`
  margin-left: -20%;

  @media (min-width: 1200px) {
    margin-left: 0;
  }
`;

export const Designer = styled(motion.h1)`
  text-align: right;
  margin-right: -20%;
  @media (min-width: 1200px) {
    margin-right: 0;
  }
`;

export const Image = styled(motion.div)`
  display: block;
  overflow: hidden;
  position: fixed;
  inset: 0px;
  box-sizing: border-box;
  margin: 0px;
  height: 100vh;
  z-index: 10;
  /* margin: 0 auto; */
  & img {
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: center top;
    @media (min-width: 1200px) {
      object-fit: contain;
      object-position: center bottom;
    }
  }
`;

export const IntroTextContainer = styled(motion.div)`
  display: none;
  color: ${props => props.theme.gray};
  position: absolute;
  top: 65%;
  right: 5%;
  font-size: Open Sans;

  @media (min-width: 1200px) {
    display: block;
  }
`;
