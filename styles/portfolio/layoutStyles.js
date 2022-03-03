import styled, { css } from "styled-components";

// Navbar
export const NContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 0 24px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: Antonio;
  font-weight: 700;
  color: ${props => props.theme.primary};
  mix-blend-mode: difference; ;
`;

export const LogoContainer = styled.div`
  padding-top: 0.5rem;
  & a {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & h3 {
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  @media (min-width: 700px) {
    & h3 {
      padding-left: 1rem;
    }
  }

  &:hover h3 {
    color: ${props => props.theme.white};
  }
`;

export const NMenuContainer = styled.div`
  & ul {
    list-style: none;
  }

  & li {
    font-size: calc(1rem + 1vw);
  }
`;

export const Menu = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;

export const Item = styled.li`
  position: relative;
  cursor: pointer;
  font-size: calc(1rem + 1vw);

  & a {
    transition: all 0.3s ease-in-out;
  }

  &:hover a {
    color: ${props => props.theme.white};
  }
`;

// Footer
export const FContainer = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  z-index: 20;
  width: 100%;
  padding: 0 24px;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  font-family: Antonio;
  font-weight: 700;
  color: ${props => props.theme.primary};
  mix-blend-mode: difference;

  @media (min-width: 700px) {
    display: flex;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FTextContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s ease-in-out;

  & h3 {
    font-size: calc(1rem + 1vw);
    white-space: nowrap;
  }
  & div {
    margin-top: 8px;
    margin-left: 8px;
    width: 3rem;
    height: 2px;
    border-radius: 100px;
    background-color: ${props => props.theme.primary};
    mix-blend-mode: difference;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    ${props =>
      props.contact &&
      css`
        color: ${props => props.theme.white};
      `}
  }

  &:hover div {
    ${props =>
      props.contact &&
      css`
        background-color: ${props => props.theme.white};
      `}
  }
`;

export const FSocialSVG = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: space-around;

  & path {
    fill: ${props => props.theme.primary};
    mix-blend-mode: difference;
  }
`;

// Mobile Footer
export const MFContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 150;
  width: 100%;
  padding: 0 24px;
  padding-bottom: 20px;
  justify-content: flex-end;
  align-items: center;
  font-family: Antonio;
  font-weight: 700;
  color: ${props => props.theme.primary};
  mix-blend-mode: difference;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const MFButtonContainer = styled.div`
  background-color: ${props => props.theme.primary};
  width: 41px;
  height: 41px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreditsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Antonio;
  font-weight: 700;
  color: ${props => props.theme.primary};
  padding-bottom: 5rem;
  mix-blend-mode: difference;
`;

export const Svg = styled.span`
  & path {
    transition: all 0.2s ease-in-out;
  }

  &:hover path {
    fill: ${props => props.theme.white};
  }
`;
