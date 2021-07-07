import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const H1 = styled.h2`
  font-family: Open Sans;
  font-weight: 800;
  font-size: 4rem;
  color: ${props => props.theme.heading};
  text-transform: auto;
`;

export const BackdropStyles = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.8s;

  @media (min-width: 1080px) {
    display: none;
  }
`;

export const ToggleContainer = styled.div`
  display: inline-block;
  z-index: 10;

  @media (min-width: 1080px) {
    display: none;
  }
`;

export const FullContainer = styled.div`
  display: none;
  z-index: 10;

  @media (min-width: 1080px) {
    display: inline-block;
  }
`;

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 1660px;
  position: relative;
`;

export const StickyContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  height: 0;
  z-index: 20;
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  ${props =>
    props.containerHeight &&
    css`
      height: 100%;
    `}
  ${props =>
    props.fullHeight &&
    css`
      height: 100vh;
    `}
  ${props =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `}
  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `};
  ${props =>
    props.center &&
    css`
      align-items: center;
    `};
  ${props =>
    props.spaceBetween &&
    css`
      align-items: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      align-items: flex-end;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};
`;

const bubbles = keyframes`
    from {
    transform: translate();
  }
  to {
    transform: translate(0, -66.666%);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  padding: 7px 20px;
  padding: ${props => props.py} ${props => props.px};
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
  background: transparent;
  font-family: Antonio;
  font-weight: bold;
  letter-spacing: 0.04em;
  border-radius: 2px;
  outline: none;
  background: ${props => props.theme.base};
  font-size: 1.2rem;
  z-index: 1;

  &:focus,
  &:hover {
    color: ${props => props.theme.base};
    background: transparent;
  }

  &::after {
    content: '';
    background: ${props => props.theme.primary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0;
  }

  &:focus::after,
  &:hover::after {
    height: 100%;
  }

  &::before {
    content: '';
    pointer-events: none;
    opacity: 0.6;
    background: radial-gradient(
        circle at 20% 35%,
        transparent 0,
        transparent 2px,
        ${props => props.theme.primary} 3px,
        ${props => props.theme.primary} 4px,
        transparent 4px
      ),
      radial-gradient(
        circle at 75% 44%,
        transparent 0,
        transparent 2px,
        ${props => props.theme.primary} 3px,
        ${props => props.theme.primary} 4px,
        transparent 4px
      ),
      radial-gradient(
        circle at 46% 52%,
        transparent 0,
        transparent 4px,
        ${props => props.theme.primary} 5px,
        ${props => props.theme.primary} 6px,
        transparent 6px
      );

    width: 100%;
    height: 300%;
    top: 0;
    left: 0;
    position: absolute;
    animation: ${bubbles} 5s linear infinite both;
  }

  &:focus::before,
  &:hover::before {
    background: radial-gradient(
        circle at 20% 35%,
        transparent 0,
        transparent 2px,
        ${props => props.theme.base} 3px,
        ${props => props.theme.base} 4px,
        transparent 4px
      ),
      radial-gradient(
        circle at 75% 44%,
        transparent 0,
        transparent 2px,
        ${props => props.theme.base} 3px,
        ${props => props.theme.base} 4px,
        transparent 4px
      ),
      radial-gradient(
        circle at 46% 52%,
        transparent 0,
        transparent 4px,
        ${props => props.theme.base} 5px,
        ${props => props.theme.base} 6px,
        transparent 6px
      );
  }
`;

export const TBContainer = styled.div`
  position: absolute;
  z-index: 21;
  ${props =>
    props.right &&
    css`
      right: 20px;
    `};

  ${props =>
    props.left &&
    css`
      left: 20px;
    `};

  &svg {
    transition: 0.4s;
  }

  & path {
    fill: ${props => props.theme.primary};
    transition: 0.4s;
  }

  &:hover path {
    fill: ${props => props.theme.black};
  }
`;

export const ToggleButton = styled.button`
  cursor: pointer;
  position: relative;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  padding: 7px 20px;
  padding: ${props => props.py} ${props => props.px};
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
  background: transparent;
  font-family: Antonio;
  font-weight: bold;
  letter-spacing: 0.04em;
  border-radius: 2px;
  outline: none;
  background: ${props => props.theme.base};
  font-size: 1.2rem;
  z-index: 1;

  &:hover {
    color: ${props => props.theme.base};
    background: transparent;
  }

  &::after {
    content: '';
    background: ${props => props.theme.primary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0;
  }

  &:hover::after {
    height: 100%;
  }

  &::before {
    content: '';
    pointer-events: none;
    opacity: 0.6;
    background: radial-gradient(
        circle at 20% 35%,
        transparent 0,
        transparent 2px,
        ${props => props.theme.primary} 3px,
        ${props => props.theme.primary} 4px,
        transparent 4px
      ),
      radial-gradient(
        circle at 75% 44%,
        transparent 0,
        transparent 2px,
        ${props => props.theme.primary} 3px,
        ${props => props.theme.primary} 4px,
        transparent 4px
      ),
      radial-gradient(
        circle at 46% 52%,
        transparent 0,
        transparent 4px,
        ${props => props.theme.primary} 5px,
        ${props => props.theme.primary} 6px,
        transparent 6px
      );

    width: 100%;
    height: 300%;
    top: 0;
    left: 0;
    position: absolute;
    animation: ${bubbles} 5s linear infinite both;
  }

  &:hover::before {
    background: radial-gradient(
        circle at 20% 35%,
        transparent 0,
        transparent 2px,
        ${props => props.theme.base} 3px,
        ${props => props.theme.base} 4px,
        transparent 4px
      ),
      radial-gradient(
        circle at 75% 44%,
        transparent 0,
        transparent 2px,
        ${props => props.theme.base} 3px,
        ${props => props.theme.base} 4px,
        transparent 4px
      ),
      radial-gradient(
        circle at 46% 52%,
        transparent 0,
        transparent 4px,
        ${props => props.theme.base} 5px,
        ${props => props.theme.base} 6px,
        transparent 6px
      );
  }
`;

export const PanelsContainer = styled.div`
  width: 100vw;
`;

export const LeftPanel = styled(motion.div)`
  left: 0;
  height: 100vh;
  width: 50%;
  position: fixed;
  z-index: 30;
`;

export const RightPanel = styled(motion.div)`
  height: 100vh;
  width: 50%;
  position: fixed;
  right: 0;
  z-index: 30;
`;
