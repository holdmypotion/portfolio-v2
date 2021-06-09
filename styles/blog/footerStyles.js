import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 16rem;
  right: 40px;
  top: 30px;
  padding: 1rem;
  z-index: 10;
  background: ${props => props.theme.baseLight};
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
  font-size: 0.9rem;
`;

export const Menu = styled.ul`
  list-style: none;
  text-align: center;
`;

export const Item = styled.li`
  padding: 0.2rem 0;
  font-family: Antonio;
  font-weight: bold;
  color: ${props => props.theme.heading};
  font-size: 1.2rem;
  text-transform: uppercase;
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
