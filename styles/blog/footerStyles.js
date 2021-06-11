import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  position: absolute;
  width: 20%;
  /* max-width: 16rem; */
  right: 20px;
  top: 30px;
  padding: 1rem;
  z-index: 10;
  background: ${props => props.theme.baseLight};
  border-radius: 2px;
  border-top: 2px solid ${props => props.theme.primary};
  border-bottom: 2px solid ${props => props.theme.primary};

  @media (min-width: 1080px) {
    display: block;
  }
`;

export const Heading = styled.h2`
  font-family: Antonio;
  font-weight: bold;
  font-size: 3.5rem;
  color: ${props => props.theme.heading};
`;

export const Para = styled.p`
  padding: 1rem 0;
  text-align: center;
  font-size: 1rem;
`;

export const Menu = styled.ul`
  list-style: none;
  text-align: center;
  margin-top: 20px;
`;

export const Item = styled.li`
  position: relative;
  cursor: pointer;
  margin: -0.13rem 0;
  padding: 0.2rem 0;
  font-family: Antonio;
  font-weight: bold;
  color: ${props => props.theme.heading};
  font-size: 1.6rem;
  text-transform: uppercase;
  transition: all 0.6s ease-in-out;

  & a {
    transition: all 0.6s ease-in-out;
  }

  &:hover a {
    letter-spacing: 5px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 2px;
    background-color: ${props => props.theme.heading};
    transition: transform 0.6s ease-in-out;
    transform: scaleX(0);
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: ${props => props.theme.heading};
    transition: transform 0.6s ease-in-out;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const Form = styled.form`
  padding: 0.1rem;
  text-align: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  background: ${props => props.theme.base};
  border-radius: 2px;
  margin-bottom: 0.5rem;
  width: 100%;
  transition: 0.4s;

  &:focus-within {
    background-color: ${props => props.theme.baseLight};
  }
`;

export const Input = styled.input`
  font-family: Antonio;
  background-color: ${props => props.theme.base};
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

export const Svgs = styled.div`
  padding-top: 10px;
`;

export const Svg = styled.span`
  position: relative;
  margin: 0 10px;

  & svg {
    width: 18px;
  }

  & path {
    transition: all 0.6s ease;
    fill: ${props => props.theme.primary};
  }

  &:hover path {
    fill: ${props => props.theme.heading};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: ${props => props.theme.heading};
    transition: transform 0.3s ease-in-out;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
