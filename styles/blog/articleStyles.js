import styled from 'styled-components';

export const Container = styled.section`
  background: ${props => props.theme.baseLight};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: auto;
  height: 350px;
  z-index: 0;
`;

export const ContentContainer = styled.div`
  max-width: 87%;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.heading};
  font-family: Open Sans;
  text-transform: none;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
`;

export const TagsContainer = styled.div`
  padding: 1rem 0;
`;

export const Tag = styled.span`
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.primary};
  font-family: Antonio;
  font-weight: 800;
  margin-right: 1rem;
  padding: 5px 15px;
  border-radius: 2px;
`;

export const Body = styled.article`
  padding: 2rem 0;
  & p {
    line-height: 30px;
    font-size: 1.1rem;
    color: ${props => props.theme.black};
  }

  & li {
    line-height: 30px;
    font-size: 1.1rem;
    color: ${props => props.theme.black};
  }

  & h1 {
    padding: 1rem 0;
    font-weight: 700;
  }
`;
