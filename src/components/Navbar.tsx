import Link from "next/link";
import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { IToggle } from "../../types/AppTypes";
import Switch from "./Switch";

const Navbar: React.FunctionComponent<IToggle> = ({ toggleTheme }) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <NavContainer>
        <JHLogo href="/">
          <Logo theme={theme}>J</Logo>
          <Logo theme={theme}>H</Logo>
        </JHLogo>
        <LinkContainer>
          <ExternalLinkGlow
            href="https://jakemeout.github.io/resume/"
            theme={theme}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resumè
          </ExternalLinkGlow>
          <Link href="/blog" passHref>
            <InternalLinkGlow theme={theme}>Blog</InternalLinkGlow>
          </Link>
          <ExternalNavLink
            href="https://twitter.com/jakeme0ut"
            target="_blank"
            rel="noopener noreferrer"
          >
            {theme.label === "dark" ? (
              <img
                src={`/twitter-light.png`}
                alt="twitter-light"
                width={25}
                height={25}
              />
            ) : (
              <img
                src={`/twitter-dark.png`}
                alt="twitter-dark"
                width={25}
                height={25}
              />
            )}
          </ExternalNavLink>
          <ExternalNavLink
            href="https://www.linkedin.com/in/jacobhyde/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {theme.label === "dark" ? (
              <img
                src={`/linkedin-light.png`}
                alt="linkedin-light"
                width={25}
                height={25}
              />
            ) : (
              <img
                src={`/linkedin-dark.png`}
                alt="linkedin-dark"
                width={25}
                height={25}
              />
            )}
          </ExternalNavLink>
          <ExternalNavLink
            href="https://github.com/jakemeout"
            target="_blank"
            rel="noopener noreferrer"
          >
            {theme.label === "dark" ? (
              <img
                src={`/github-light.png`}
                alt="github-light"
                width={25}
                height={25}
              />
            ) : (
              <img
                src={`/github-dark.png`}
                alt="github-dark"
                width={25}
                height={25}
              />
            )}
          </ExternalNavLink>
          <Switch toggleTheme={toggleTheme} />
        </LinkContainer>
      </NavContainer>
    </ThemeProvider>
  );
};

const NavContainer = styled.div(
  ({ theme }) => `
  display:flex;
  justify-content: space-between;
  border-top: 12px solid ${theme.hr.primary};
  padding: 0px 90px 0px 90px;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
  `,
);

const JHLogo = styled(Link)`
  display: flex;
  padding: 15px 50px 15px 50px;
  text-decoration: none;
`;

const ExternalNavLink = styled.a<{
  children?: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
}>`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  cursor: pointer;
`;

const InternalLinkGlow = styled.a<{ children?: React.ReactNode }>(
  ({ theme }) => `
  color: ${theme.text.primary};
  margin-right: 15px;
  font-weight: 200;
  font-size: 14px;
  text-decoration: none;
  :hover {
    text-shadow: 0 0 6px ${theme.text.primary};
  }
  `,
);

const ExternalLinkGlow = styled.a<{
  children?: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
}>(
  ({ theme }) => `
  color: ${theme.text.primary};
  margin-right: 15px;
  font-weight: 200;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-shadow: 0 0 6px ${theme.text.primary};
  }
  `,
);

const Logo = styled.h1<{ children?: React.ReactNode }>(
  ({ theme }) => `
  color: ${theme.text.primary};
  font-weight: 300;
  align-self: start;
  
  -webkit-transform: scale(1) translate3d(0, 0, 0);
  background: transparent;
  box-shadow: none;
`,
);

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 50px 15px 50px;
  @media screen and (max-width: 600px) {
    padding-left: 0px;
  }
`;

export default Navbar;
