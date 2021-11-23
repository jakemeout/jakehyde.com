import React from "react";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  return <NavContainer></NavContainer>;
};

const NavContainer = styled.div(
  ({ theme }) => `
    color: ${theme.text.primary};
  `
);
