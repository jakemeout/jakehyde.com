import React from "react";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";

type HeaderProps = {
  children: React.ReactNode;
};

const Heading: React.FunctionComponent<HeaderProps> = ({ children }) => {
  const { theme } = useTheme();
  return <HeaderText theme={theme}>{children}</HeaderText>;
};

const HeaderText = styled.h1(
  ({ theme }) => `
  color: ${theme.text.primary};
`
);

export default Heading;
