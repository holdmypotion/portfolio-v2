import styled, { css } from 'styled-components';

export const H1 = styled.h2`
  font-family: Open Sans;
  font-weight: 800;
  font-size: 4rem;
  color: ${props => props.theme.heading};
  text-transform: auto;
`;

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 1550px;
  position: relative;
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `};
  ${props =>
    props.center &&
    css`
      justify-content: center;
    `};
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
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
