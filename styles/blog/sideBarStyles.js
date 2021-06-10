import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 16rem;
  height: 100vh;
  left: 20px;
  padding: 1rem;
  top: 0;
  z-index: 10;
  background: ${props => props.theme.baseLight};
  border-radius: 2px;
`;

export const SBContainer = styled.div`
  background: ${props => props.theme.base};
  border-radius: 2px;
  width: 100%;

  & svg {
    margin-left: 0.5rem;
    padding-top: 0.2rem;
  }
`;

export const SBInput = styled.input`
  font-family: Antonio;
  background-color: ${props => props.theme.base};
  outline: none;
  color: ${props => props.theme.primary};
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  width: 100%;
  padding: 5px;
  border-radius: 2px;
  border: 2px solid transparent;
  transition: 0.4s;

  &:focus-within {
    background-color: transparent;
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
