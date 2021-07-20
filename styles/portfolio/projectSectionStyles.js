import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.gray};
`;

export const IntroTextContainer = styled.div`
  margin: 0 auto;
  padding-top: 4rem;
  text-align: center;
  color: ${props => props.theme.primary};
  max-width: 90%;

  @media (min-width: 1200px) {
    display: none;
  }
`;
