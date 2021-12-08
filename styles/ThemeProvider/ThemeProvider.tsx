import { createContext, useState, useContext } from "react";
import { DefaultTheme } from "styled-components";
import themes from "../theme";

interface MainDefaultTheme extends DefaultTheme {
  label: string;
}

export type ThemeContextType = {
  theme: MainDefaultTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.darkTheme,
  toggleTheme: () => null,
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const [currTheme, setCurrTheme] = useState<MainDefaultTheme>(
    themes.darkTheme
  );

  const toggleTheme = () => {
    currTheme === themes.darkTheme
      ? setCurrTheme(themes.lightTheme)
      : setCurrTheme(themes.darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: currTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
