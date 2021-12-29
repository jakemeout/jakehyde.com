import React from "react";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";
import Switch from "./Switch";

declare module "*.png";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  return (
    <NavContainer theme={theme}>
      <LinkContainer>
        <LinkedInIcon>
          {theme.label === "dark" ? (
            <img
              src={`/linkedin-light.png`}
              alt="github-dark"
              width={40}
              height={40}
            />
          ) : (
            <img
              src={`/linkedin-dark.png`}
              alt="github-dark"
              width={40}
              height={40}
            />
          )}
        </LinkedInIcon>
        <GitHubIcon>
          {theme.label === "dark" ? (
            <img
              src={`/github-light.png`}
              alt="github-dark"
              width={40}
              height={40}
            />
          ) : (
            <img
              src={`/github-dark.png`}
              alt="github-dark"
              width={40}
              height={40}
            />
          )}
        </GitHubIcon>
        <Switch />
      </LinkContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div(
  ({ theme }) => `
  border-top: 6px solid ${theme.hr.primary};
  `
);

const GitHubIcon = styled.div`
  padding-right: 30px;
`;
const LinkedInIcon = styled.div`
  padding-right: 15px;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 15px 50px 15px 50px;
`;

export default Navbar;
