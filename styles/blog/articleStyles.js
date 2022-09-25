import styled from "styled-components";

export const Container = styled.section`
  background: ${(props) => props.theme.baseLight};
  margin-top: 1rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: auto;
  height: 350px;
  z-index: 0;
`;

export const ContentContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.heading};
  font-family: Open Sans;
  text-transform: none;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 400px) {
    font-size: 2.3rem;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Tag = styled.span`
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.primary};
  font-family: Antonio;
  font-weight: 800;
  margin-right: 1rem;
  margin-top: 1rem;
  padding: 5px 15px;
  border-radius: 2px;
`;

export const Body = styled.article`
  font-family: Open Sans;
  padding: 1rem 0;
  word-wrap: break-word;
  & p {
    line-height: 30px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.articlePara};
    margin-bottom: 1rem;
  }

  & blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  & ul {
    padding-inline-start: 40px;
  }

  & li {
    line-height: 30px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.articlePara};
    margin-bottom: 1rem;

    & li {
      list-style: disc;
    }
  }

  & h1 {
    padding: 1rem 0;
    font-weight: 700;

    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }

  & code {
    background-color: ${(props) => props.theme.base};
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.2rem;
  }
  & a {
    color: ${(props) => props.theme.primary};
    text-decoration: underline;
    line-height: 32px;
  }

  & h3 {
    padding: 1rem 0;
    font-size: 1.8rem;
    color: ${(props) => props.theme.heading};
  }

  & img {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  padding: 1rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const SocialContainer = styled.div`
  & button {
    margin-left: 0.6rem;
  }
`;
