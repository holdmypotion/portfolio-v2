import { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ThemeContext } from "../../../store/theme-context";
import { Container } from "../../../styles/blog/globalStyles";
import Footer from "./footer";

const GlobalStyle = createGlobalStyle`
* {
  text-decoration: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.base};
  color: ${props => props.theme.para};
  overscroll-behavior: none;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
   margin: 0;
  padding: 0; 
  font-family: Open Sans;
}

h1 {
  font-family: Open Sans;
  font-weight: 700;
  font-size: 2.5rem;
  color: ${props => props.theme.heading};
}

h2 {
  font-size: 2rem;
}

`;

export default function Layout({ children }) {
  const darkTheme = {
    base: "#313131",
    baseLight: "#4A4A4A",
    baseLightest: "#636363",
    primary: "#F1762D",
    primaryLight: "#F7B48C",
    para: "#E3E3E3",
    heading: "#FCFCFC",
    black: "#171717",
    articlePara: "#fff",
  };

  const lightTheme = {
    base: "#E3E3E3",
    baseLight: "#FCFCFC",
    baseLightest: "#E3E3E3",
    primary: "#F1762D",
    primaryLight: "#F7B48C",
    para: "#4A4A4A",
    heading: "#171717",
    black: "#171717",
    articlePara: "#000",
  };

  const currentTheme = useContext(ThemeContext);
  let theme;
  switch (currentTheme.theme) {
    case "dark":
      theme = darkTheme;
      break;
    case "light":
      theme = lightTheme;
      break;
    default:
      theme = lightTheme;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Footer />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
}
