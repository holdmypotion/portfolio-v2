import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  color: white;
  font-family: Open Sans;
  z-index: 12;

  & h2 {
    font-size: 2.1rem;
  }

  @media (min-width: 700px) {
    & h2 {
      font-size: 3rem;
    }

    & p {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1200px) {
    & h2 {
      font-size: 4rem;
    }

    & p {
      font-size: 1.6rem;
    }
  }
`;

export const Bold = styled.span`
  font-size: 2.6rem;
  text-transform: uppercase;
  font-weight: 700;
  font-weight: bolder;

  @media (min-width: 700px) {
    font-size: 4rem;
  }

  @media (min-width: 1200px) {
    font-size: 5rem;
  }
`;
