import { createContext, useState, useContext } from "react";
import { DefaultTheme } from "styled-components";
import themes from "../theme";

export enum Theme {
  Dark = "darkTheme",
  Light = "lightTheme",
}

export type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  toggleTheme: () => null,
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const [currTheme, setCurrTheme] = useState<Theme>(Theme.Dark);

  const toggleTheme = () => {
    currTheme === Theme.Dark
      ? setCurrTheme(Theme.Light)
      : setCurrTheme(Theme.Dark);
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[currTheme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
