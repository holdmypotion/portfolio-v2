import { useState, createContext } from 'react';

export const ThemeContext = createContext({
  currentTheme: 'yy',
  themeSwitchHandler: () => {},
});
const ThemeContextProvider = props => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const themeSwitchHandler = themeType => {
    setCurrentTheme(themeType);
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
