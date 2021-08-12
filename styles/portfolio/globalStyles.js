import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.gray};
  max-width: 90%;
  margin: 0 auto;
`;

export const MarqueeContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const marquee = keyframes`
  0% {
    transform: translate3d(calc(-25%), 0, 0);
  }

  100% {
    transform: translate3d(calc(-50%), 0, 0);
  }
`;

const marqueeLarge = keyframes`
  0% {
    transform: translate3d(calc(-25% + 10vw), 0, 0);
  }

  100% {
    transform: translate3d(calc(-50% + 10vw), 0, 0);
  }`;

export const Track = styled(motion.div)`
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(calc(-25%), 0, 0);
  animation: ${marquee} 5s linear infinite;

  @media (min-width: 1500px) {
    transform: translate3d(calc(-25% + 10vw), 0, 0);
    animation: ${marqueeLarge} 5s linear infinite;
  }

  & h1 {
    margin: 20px 3rem;
    font-size: calc(5rem + 5vw);
    font-family: Antonio;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #f4955c;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;
