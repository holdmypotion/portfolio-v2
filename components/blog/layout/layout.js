import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Container } from '../../../styles/blog/globalStyles';
import Sidebar from '../sideBar/sideBar';
import Footer from './footer';

const GlobalStyle = createGlobalStyle`
${'' /* ${normalize} */}
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
`;

export default function Layout({ children }) {
  const darkTheme = {
    base: '#313131',
    baseLight: '#4A4A4A',
    baseLightest: '#636363',
    primary: '#F1762D',
    primaryLight: '#F7B48C',
    para: '#E3E3E3',
    heading: '#FCFCFC',
    black: '#171717',
  };

  const lightTheme = {
    base: '#E3E3E3',
    baseLight: '#FCFCFC',
    baseLightest: '#E3E3E3',
    primary: '#F4955C',
    primaryLight: '#F7B48C',
    para: '#4A4A4A',
    heading: '#171717',
    black: '#171717',
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>
        <Footer />
        <Sidebar />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
}
