import styled from 'styled-components';

export const Container = styled.div``;

export const BTContainer = styled.div`
  max-width: 300px;
  height: 500px;
  background: ${props => props.theme.baseLight};
`;

export const BTImageContainer = styled.div`
  position: relative;
  width: 300px;
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
`;
