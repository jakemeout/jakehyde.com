import React, { useEffect, useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import styled, { useTheme } from "styled-components";
import { lightTheme, darkTheme, defaultTheme } from "../../styles/theme";
import GlobalStyle from "../../styles/GlobalStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  useEffect(() => {
    setCurrTheme(localStorage.theme === "light" ? lightTheme : darkTheme);
  }, []);
  const [currTheme, setCurrTheme] = useState<DefaultTheme>(defaultTheme);

  const toggleTheme = () => {
    if (currTheme === darkTheme) {
      setCurrTheme(lightTheme);
      localStorage.setItem("theme", lightTheme.label);
    } else {
      setCurrTheme(darkTheme);
      localStorage.setItem("theme", darkTheme.label);
    }
  };
  const theme = useTheme();
  return (
    <ThemeProvider theme={currTheme}>
      <LayoutStyle>
        <GlobalStyle theme={theme} />
        <Navbar toggleTheme={toggleTheme} />
        <main>{children}</main>
        <FooterContainer>
          <Footer>© COPYRIGHTS JAKE HYDE. ALL RIGHTS RESERVED.</Footer>
        </FooterContainer>
      </LayoutStyle>
    </ThemeProvider>
  );
};

const FooterContainer = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
`;
const LayoutStyle = styled.div(
  ({ }) => `

`
);

export default Layout;
