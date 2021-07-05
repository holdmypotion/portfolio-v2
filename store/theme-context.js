import { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext({
  currentTheme: 'yy',
  themeSwitchHandler: () => {},
});
const ThemeContextProvider = props => {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setCurrentTheme(localStorage.getItem('theme'));
  }, []);

  const themeSwitchHandler = themeType => {
    setCurrentTheme(themeType);
    localStorage.setItem('theme', themeType);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        themeSwitchHandler: themeSwitchHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
