import { createContext, useState, useContext, useEffect } from "react";
import { DefaultTheme } from "styled-components";
import themes from "../theme";

export interface MainDefaultTheme extends DefaultTheme {
  bg: any;
  label: string;
}
export type LocalTheme = string;
export type ThemeContextType = {
  theme: MainDefaultTheme;
  toggleTheme: () => void;
  localTheme: any;
  currTheme: MainDefaultTheme;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.darkTheme,
  toggleTheme: () => null,
  localTheme: "dark",
  currTheme: themes.darkTheme,
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const [localTheme, setLocalTheme] = useState("");

  useEffect(() => {
    setLocalTheme(localStorage.theme);
  }, [localTheme]);

  const defaultTheme =
    localTheme === "dark" ? themes.darkTheme : themes.lightTheme;
  const [currTheme, setCurrTheme] = useState<MainDefaultTheme>(defaultTheme);

  const toggleTheme = () => {
    if (currTheme === themes.darkTheme) {
      setCurrTheme(themes.lightTheme);
      setLocalTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setCurrTheme(themes.darkTheme);
      setLocalTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme: currTheme, toggleTheme, localTheme, currTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
