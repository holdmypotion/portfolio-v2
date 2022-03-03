import styled, { keyframes } from "styled-components";

export const ProjectContainer = styled.div`
  background-color: ${props => props.theme.gray};
  /* max-width: 2000px;
  margin: 0 auto; */
  padding: 20vh 0;
`;

export const Header = styled.div``;

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
  text-transform: uppercase;
  color: ${props => props.theme.grayLight};
`;

export const ThumbnailContainer = styled.div`
  max-width: 1800px;
  margin: auto;
`;

export const Thumbnail = styled.a`
  display: block;
  /* cursor: pointer; */
  position: relative;
  width: 100%;
  height: calc(100vw * 0.7);
  box-shadow: rgba(0, 0, 0, 0.65) 0px 20px 80px 0px;
  z-index: 5;
  max-width: 1080px;
  max-height: 700px;
  margin: 10vh 0;

  &:focus,
  &:hover {
    color: ${props => props.theme.base};
    background: transparent;
  }

  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    transition: all 0.6s ease;
    width: 100%;
    height: 0;
  }

  &:focus::after,
  &:hover::after {
    height: 100%;
  }
  /* &:focus article,
  &:hover article {
    transform: scale(1.1);
  } */
`;

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  margin: auto;
  z-index: 2;
  transition: 1s all ease;
`;

export const Content = styled.article`
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 5%;
  z-index: 4;
  transition: 1s all ease;
  transition-delay: 0.25s;
`;

export const Title = styled.h1`
  color: ${props => props.theme.primary};
  font-family: Open Sans;
  text-transform: capitalize;
  font-size: calc(1rem + 4vw);
  transition: 1s all ease;
  font-weight: 800;

  @media (min-width: 1500px) {
    font-size: 4.86rem;
  }
`;

export const Description = styled.h4`
  font-size: calc(0.4rem + 1.3vw);
  font-family: Open Sans;
  text-transform: none;
  color: ${props => props.theme.primary};
  padding-bottom: 1.4rem;
  font-weight: 600;
  transition: 1s all ease;
  @media (min-width: 1500px) {
    font-size: 1.65rem;
  }
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
  z-index: 1;
  font-size: 0.8rem;
  padding: 5px 16px;

  @media (min-width: 700px) {
    padding: 7px 20px;
    font-size: 1.2rem;
  }
  &:focus,
  &:hover {
    color: ${props => props.theme.base};
    background: transparent;
  }

  &::after {
    content: "";
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
    content: "";
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

// export const IntroTextContainer = styled.div`
//   margin: 0 auto;
//   padding-top: 4rem;
//   text-align: center;
//   color: ${props => props.theme.primary};
//   max-width: 90%;

//   @media (min-width: 1200px) {
//     display: none;
//   }
// `;
