import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import styled, { useTheme } from "styled-components";
import Switch from "./Switch";
import { IToggle } from "../../types/AppTypes";
import Modal from "./Modal";
import Login from "./Login";
const Navbar: React.FunctionComponent<IToggle> = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  const { data: session } = useSession();
  const theme = useTheme();
  return (
    <NavContainer theme={theme}>
      <Modal isOpen={isOpen} onClose={onClose} content={<Login />} />
      <JHLogo href="/">
        <Logo theme={theme}>J</Logo>
        <Logo theme={theme}>H</Logo>
      </JHLogo>
      <LinkContainer>
        <LinkGlow href="https://jakemeout.github.io/resume/" theme={theme}>
          Resumè
        </LinkGlow>
        <LinkGlow href="/blog" theme={theme}>
          Blog
        </LinkGlow>
        <SignIn theme={theme}>
          {session ? (
            <p onClick={() => signOut()}>Sign out</p>
          ) : (
            <p onClick={() => setIsOpen(true)}>SignIn</p>
          )}
        </SignIn>
        <NavLink
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
        </NavLink>
        <NavLink
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
        </NavLink>
        <NavLink
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
        </NavLink>
        <Switch toggleTheme={toggleTheme} />
      </LinkContainer>
    </NavContainer>
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
  `
);

const JHLogo = styled(Link)`
  display: flex;
  padding: 15px 50px 15px 50px;
  text-decoration: none;
`;
const NavLink = styled(Link)`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;

const Logo = styled.h1(
  ({ theme }) => `
  color: ${theme.text.primary};
  font-weight: 300;
  align-self: start;
  
  -webkit-transform: scale(1) translate3d(0, 0, 0);
  background: transparent;
  box-shadow: none;
`
);

const GitHubIcon = styled.img``;
const LinkedInIcon = styled.img``;
const TwitterIcon = styled.img``;

const LinkGlow = styled(Link)(
  ({ theme }) => `
  color: ${theme.text.primary};
  margin-right: 15px;
  font-weight: 200;
  font-size: 14px;
  text-decoration: none;
  :hover {
    text-shadow: 0 0 6px ${theme.text.primary};
  }
  `
);
const SignIn = styled("div")(
  ({ theme }) => `
  cursor: pointer;
  color: ${theme.text.primary};
  margin-right: 15px;
  font-weight: 200;
  font-size: 14px;
  text-decoration: none;
  :hover {
    text-shadow: 0 0 6px ${theme.text.primary};
  }
  `
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
