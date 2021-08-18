import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ScrollProgressBar from '../UI/scrollProgressBar';
import Credits from './credits';
import Footer from './footer';
import MobileFooter from './mobileFooter';
import Navbar from './navbar';

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
  ${'' /* background: ${props => props.theme.base}; */}
  ${'' /* color: ${props => props.theme.para}; */}
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
}

h1 {
  font-family: Antonio;
  font-weight: 700;
  font-size: 5rem;
  color: ${props => props.theme.gray};
  text-transform: uppercase;
}

`;

const Layout = props => {
  const theme = {
    primary: '#f4955c',
    grayLight: '#4a4a4a',
    gray: '#2e2e2e',
    base: '#2e2e2e',
    baseLight: '#4A4A4A',
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollProgressBar />
      <Navbar isHome={props.isHome} />
      <MobileFooter />
      {props.children}
      <Footer />
      <Credits />
    </ThemeProvider>
  );
};

export default Layout;
