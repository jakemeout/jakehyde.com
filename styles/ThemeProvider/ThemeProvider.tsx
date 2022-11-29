import { createContext, useState, useContext, useEffect } from "react";
import { DefaultTheme } from "styled-components";
import themes from "../theme";

export interface MainDefaultTheme extends DefaultTheme {
  bg: any;
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
  useEffect(() => {
    setCurrTheme(
      localStorage.theme === "light" ? themes.lightTheme : themes.darkTheme
    );
  }, []);
  const [currTheme, setCurrTheme] = useState<MainDefaultTheme>(
    themes.lightTheme
  );

  const toggleTheme = () => {
    if (currTheme === themes.darkTheme) {
      setCurrTheme(themes.lightTheme);
      localStorage.setItem("theme", themes.lightTheme.label)
    } else {
      setCurrTheme(themes.darkTheme);
      localStorage.setItem("theme", themes.darkTheme.label);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: currTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
