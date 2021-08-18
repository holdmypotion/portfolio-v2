import styled, { css, keyframes } from 'styled-components';

export const ContactContainer = styled.div`
  @media (min-width: 1080px) {
    padding-top: 20vw;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10vh 0;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 30vw;
  height: 25vw;

  @media (max-width: 1080px) {
    width: 90%;
    height: 45vw;
  }
`;

export const ContactForm = styled.form`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 0;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin: 2vh 0;
  ${props =>
    props.large &&
    css`
      width: 100%;
    `};
  ${props =>
    props.medium &&
    css`
      width: 50%;
    `};

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.grayLight};
  font-size: calc(0.8rem + 0.5vw);
`;

export const InputWrapper = styled.div`
  position: relative;
  background: ${props => props.theme.base};
  border-radius: 2px;
  width: 100%;
  transition: 0.4s;
`;
export const Input = styled.input`
  font-family: Open Sans;
  background: ${props => props.theme.base};
  outline: none;
  color: ${props => props.theme.primary};
  font-size: calc(1rem + 0.5vw);
  letter-spacing: 0.5px;
  width: 100%;
  padding: 5px;
  padding-bottom: 10px;
  border-radius: 2px;
  border: 2px solid transparent;
  border-bottom: 2px solid ${props => props.theme.grayLight};
  transition: 0.4s;

  &::placeholder {
    color: ${props => props.theme.primary};
  }

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

  &:focus ~ span:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }

  &:focus ~ i:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
`;

export const TextArea = styled.textarea`
  font-family: Open Sans;
  background: ${props => props.theme.base};
  outline: none;
  color: ${props => props.theme.primary};
  font-size: calc(1rem + 0.5vw);
  letter-spacing: 0.5px;
  width: 100%;
  padding: 5px;
  padding-bottom: 10px;
  border-radius: 2px;
  border: 2px solid transparent;
  border-bottom: 2px solid ${props => props.theme.grayLight};
  transition: 0.4s;

  &::placeholder {
    color: ${props => props.theme.primary};
  }

  /* ~ span::before, */
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

  /* ~ i::before, */
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

  /* &:focus ~ span:before, */
  &:focus ~ span:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }

  /* &:focus ~ i:before, */
  &:focus ~ i:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
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

export const Submit = styled.button`
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
  font-size: calc(0.8rem + 0.5vw);
  letter-spacing: 0.04em;
  border-radius: 2px;
  outline: none;
  background: ${props => props.theme.base};
  z-index: 1;
  margin-top: 2rem;

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
