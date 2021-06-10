import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 16rem;
  right: 40px;
  top: 30px;
  padding: 1rem;
  z-index: 10;
  background: ${props => props.theme.baseLight};
  border-radius: 2px;
`;

export const Heading = styled.h2`
  font-family: Antonio;
  font-weight: bold;
  font-size: 3rem;
  color: ${props => props.theme.heading};
`;

export const Para = styled.p`
  padding: 1rem 0;
  text-align: center;
  font-size: 0.75rem;
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
  font-size: 1.2rem;
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
`;

export const Input = styled.input`
  font-size: 0.8rem;
  padding: 5px 2px;
  width: 100%;
  margin-bottom: 0.7rem;
  background: ${props => props.theme.base};
  color: ${props => props.theme.para};
  border-radius: 2px;
  border: 2px solid transparent;
  outline: none;

  &:focus,
  &:hover {
    border: 2px solid ${props => props.theme.primary};
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
