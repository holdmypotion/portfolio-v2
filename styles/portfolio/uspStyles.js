import styled from 'styled-components';

export const USPContainer = styled.main`
  padding: 15vh 0;
  background-color: ${props => props.theme.primary};
  margin: 20vh auto;
`;

export const InternalContainer = styled.div`
  max-width: 1800px;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  font-family: Open Sans;
  font-size: calc(2rem + 5vw);
  font-weight: normal;
  color: ${props => props.theme.gray};
  padding-bottom: 1rem;
  text-transform: none;
  width: 90%;
  letter-spacing: -0.05em;

  & span {
    font-weight: 700;
  }
`;

export const SubHeading = styled.h3`
  font-family: Open Sans;
  font-size: calc(1rem + 2vw);
  font-weight: normal;
  color: ${props => props.theme.gray};
  padding-bottom: 1rem;
  text-transform: none;
  width: 90%;
  letter-spacing: -0.05em;

  & span {
    font-weight: 700;
  }
`;

export const ParaContainer = styled.div`
  padding-top: 5vh;
  max-width: 750px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1080px) {
    /* max-width: 40%; */
  }
`;

export const Para = styled.p`
  color: ${props => props.theme.gray};
  font-size: calc(1rem + 0.5vw);

  & span {
    font-weight: 700;
  }
`;
