import styled, { css } from 'styled-components';

export const TOC = styled.nav`
  /* margin: 0 auto; */
  padding-top: 2rem;
  margin: 0;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: ${props => props.theme.heading};
  font-family: Antonio;
  text-align: center;
  padding-bottom: 1rem;

  @media (max-width: 1410px) {
    font-size: 1.7rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding-left: 1rem;
  color: ${props => props.theme.primary};
  background: ${props => props.theme.base};
  overflow-x: auto;
  border-top: 2px solid ${props => props.theme.primary};
  border-bottom: 2px solid ${props => props.theme.primary};
`;

export const OuterList = styled.ul`
  width: 90%;
  margin: 0 auto;
`;

export const InnerList = styled.ul`
  padding-left: 1rem;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.4rem;
  padding: 0.3rem 0;
  transition: 0.4s;

  @media (max-width: 1410px) {
    font-size: 1rem;
    margin-left: 0.2rem;
  }
  &:hover {
    color: ${props => props.theme.heading};
  }

  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.heading};
    `}
`;
