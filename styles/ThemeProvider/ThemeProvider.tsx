import { createContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles";

enum Theme {
  Dark = "dark",
  Light = "light",
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (Theme: Theme) => void;
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
  const [theme, setTheme] = useState(Theme.Dark);
  const toggleTheme = (currTheme: Theme) =>
    currTheme === Theme.Dark ? setTheme(Theme.Light) : setTheme(Theme.Dark);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
