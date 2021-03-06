import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  position: absolute;
  width: 20%;
  height: 100vh;
  left: 20px;
  max-width: 20rem;
  padding-top: 1rem;
  top: 0;
  background: ${props => props.theme.baseLight};
  border-radius: 2px;
  z-index: 10;
  transition: 0.8s;
  overflow-y: auto;
  @media (max-width: 1080px) {
    width: 70%;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const SBContainer = styled.div`
  background: ${props => props.theme.base};
  border-radius: 2px;
  width: 100%;
  transition: 0.4s;
  margin: 2rem 0;

  & svg {
    margin-left: 0.5rem;
    padding-top: 0.2rem;
  }
  &:focus-within {
    background: ${props => props.theme.baseLight};
  }
`;

export const SBInput = styled.input`
  font-family: Antonio;
  background: ${props => props.theme.base};
  outline: none;
  color: ${props => props.theme.primary};
  font-size: 1rem;
  letter-spacing: 0.5px;
  width: 100%;
  padding: 5px;
  border-radius: 2px;
  border: 2px solid transparent;
  transition: 0.4s;

  &:focus-within {
    background: ${props => props.theme.baseLight};
  }

  &::placeholder {
    color: ${props => props.theme.primary};
  }

  ~ span::before,
  ~ span::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.primary};
    transition: 0.4s;
    border-radius: 2px;
  }

  ~ span::after {
    top: auto;
    bottom: 0;
  }

  ~ i::before,
  ~ i::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: ${props => props.theme.primary};
    transition: 0.6s;
  }

  ~ i::after {
    left: auto;
    right: 0;
  }

  &:focus ~ span:before,
  &:focus ~ span:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }

  &:focus ~ i:before,
  &:focus ~ i:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
`;

export const SelectedTagContainer = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 0.3rem;
`;

export const UnselectedTagContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  margin-top: 0.3rem;
`;

export const UnselectedTagBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & div {
    flex: 1;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.baseLightest};
    border-radius: 2px;
  }
`;

export const Heading = styled.h2`
  text-transform: capitalize;
  font-family: Antonio;
  font-size: 1.7rem;
`;

const bubbles = keyframes`
    from {
    transform: translate();
  }
  to {
    transform: translate(0, -66.666%);
  }
`;

export const UnselectedTag = styled.button`
  cursor: pointer;
  margin: 0.5rem 0;
  position: relative;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  padding: 5px 15px;
  overflow: hidden;
  transition: 1s all ease;
  background: transparent;
  font-family: Antonio;
  font-weight: bold;
  letter-spacing: 0.04em;
  border-radius: 2px;
  outline: none;
  background: ${props => props.theme.base};
  font-size: 1rem;

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

export const SelectedTag = styled.button`
  cursor: pointer;
  margin: 0.2rem 0;
  margin-right: 0.4rem;
  position: relative;
  color: ${props => props.theme.black};
  border: 2px solid ${props => props.theme.primary};
  padding: 5px 15px;
  overflow: hidden;
  transition: 1s all ease;
  background: transparent;
  font-family: Antonio;
  font-weight: bold;
  letter-spacing: 0.04em;
  border-radius: 2px;
  outline: none;
  background: ${props => props.theme.primary};
  font-size: 1rem;

  &:focus,
  &:hover {
    color: ${props => props.theme.primary};
    background: transparent;
  }

  &::after {
    content: '';
    background: ${props => props.theme.base};
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
  }
`;

export const LogoContainer = styled.div`
  position: relative;
`;

export const LogoImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid transparent;
  border-radius: 50%;
  overflow: hidden;
`;

export const Logo = styled.h2`
  font-family: Caveat;
  font-weight: 800;
  font-size: 4rem;
  color: ${props => props.theme.heading};
  text-transform: auto;
  text-align: center;
`;
