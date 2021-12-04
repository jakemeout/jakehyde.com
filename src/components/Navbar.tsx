import React from "react";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";
import Switch from "./Switch";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  return (
    <NavContainer theme={theme}>
      <Switch />
    </NavContainer>
  );
};

const NavContainer = styled.div(
  ({ theme }) => `
    color: ${theme.text.primary};
    height: 75px;
    width: 100%;
    display: flex;
    
  `
);

export default Navbar;
