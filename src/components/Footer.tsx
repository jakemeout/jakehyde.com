import React from "react";
import styled, { useTheme } from "styled-components";

type FooterProps = {
  children: React.ReactNode;
};

const Footer: React.FunctionComponent<FooterProps> = ({ children }) => {
  const theme = useTheme();
  return <FooterText theme={theme}>{children}</FooterText>;
};

const FooterText = styled.h6<{ children: React.ReactNode }>(
  ({ theme }) => `
  color: ${theme.text.primary};
  font-weight: 200;
`,
);

export default Footer;
