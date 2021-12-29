import React from "react";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";
import Switch from "./Switch";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  return (
    <NavContainer theme={theme}>
      <LogoAnimation>
        <Logo theme={theme} className="J">
          J
        </Logo>
        <Logo theme={theme} className="H">
          H
        </Logo>
      </LogoAnimation>
      <LinkContainer>
        <Link
          href="https://twitter.com/jakeme0ut"
          target="_blank"
          rel="noopener"
        >
          {theme.label === "dark" ? (
            <TwitterIcon
              src={`/twitter-light.png`}
              alt="twitter-light"
              width={25}
              height={25}
            />
          ) : (
            <TwitterIcon
              src={`/twitter-dark.png`}
              alt="twitter-dark"
              width={25}
              height={25}
            />
          )}
        </Link>
        <Link
          href="https://www.linkedin.com/in/jacobhyde/"
          target="_blank"
          rel="noopener"
        >
          {theme.label === "dark" ? (
            <LinkedInIcon
              src={`/linkedin-light.png`}
              alt="linkedin-light"
              width={25}
              height={25}
            />
          ) : (
            <LinkedInIcon
              src={`/linkedin-dark.png`}
              alt="linkedin-dark"
              width={25}
              height={25}
            />
          )}
        </Link>
        <Link
          href="https://github.com/jakemeout"
          target="_blank"
          rel="noopener"
        >
          {theme.label === "dark" ? (
            <GitHubIcon
              src={`/github-light.png`}
              alt="github-light"
              width={25}
              height={25}
            />
          ) : (
            <GitHubIcon
              src={`/github-dark.png`}
              alt="github-dark"
              width={25}
              height={25}
            />
          )}
        </Link>
        <Switch />
      </LinkContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div(
  ({ theme }) => `
  display:flex;
  justify-content: space-between;
  border-top: 6px solid ${theme.hr.primary};
  `
);

const LogoAnimation = styled.div`
  display: flex;
  padding: 15px 50px 15px 50px;
`;
const Link = styled.a`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;
const Logo = styled.h1(
  ({ theme }) => `
  color: ${theme.text.primary};
  font-weight: 300;
  align-self: start;
  text-shadow: 0 0 5px ${theme.text.primary};
  -webkit-transform: scale(1) translate3d(0, 0, 0);
  background: transparent;
  box-shadow: none;
`
);
const GitHubIcon = styled.img``;
const LinkedInIcon = styled.img``;
const TwitterIcon = styled.img``;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 50px 15px 50px;
`;

export default Navbar;
