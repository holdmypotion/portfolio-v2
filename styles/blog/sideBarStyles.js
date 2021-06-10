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
