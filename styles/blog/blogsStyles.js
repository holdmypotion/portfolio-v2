import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-auto-rows: 10px;
  justify-content: center;
  grid-template-columns: auto auto auto;

  @media (max-width: 1666px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 1080px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 905px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 647px) {
    grid-template-columns: auto;
  }
`;

export const BTContainer = styled.div`
  margin: 15px 10px;
  padding: 0;
  background: ${props => props.theme.baseLight};
  border-top: 2px solid ${props => props.theme.primary};
  border-bottom: 2px solid ${props => props.theme.primary};

  ${props =>
    props.type === 'small' &&
    css`
      grid-row-end: span 47;
    `}
  ${props =>
    props.type === 'medium' &&
    css`
      grid-row-end: span 56;
    `};
  ${props =>
    props.type === 'large' &&
    css`
      grid-row-end: span 71;
    `}
`;

export const BTImageContainer = styled.div`
  position: relative;
  width: auto;
  height: 200px;
`;

export const BTContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const BTHeading = styled.h3`
  font-size: 2rem;
  font-family: Antonio;
  font-weight: 800;
  padding: 0.8rem 0;
  color: ${props => props.theme.heading};
`;

export const BTPara = styled.p`
  padding-bottom: 0.8rem;
  font-size: 1rem;
`;
