import React from "react";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";
import Switch from "./Switch";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  return (
    <NavContainer theme={theme}>
      <TopLine theme={theme} />
      <LinkContainer>
        <Switch />
      </LinkContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div(
  ({ theme }) => `
  `
);
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 0px 50px 0px 50px;
`;

const TopLine = styled.hr(
  ({ theme }) => `
   background-color: ${theme.hr.primary};
   height: 7px;
   width: 100%;
   padding:0;
   margin:0;
`
);

export default Navbar;
