import type { NextPage } from "next";
import { useTheme } from "../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";
import Heading from "../src/components/Heading";
import Navbar from "../src/components/Navbar";
import Description from "../src/components/Description";

const Home: NextPage = () => {
  const { theme } = useTheme();

  return (
    <GlobalStyle theme={theme}>
      <Navbar />
      <ProfilePhoto theme={theme} src={`/JakeGreyBkBridge.png`} />
      <Heading children={undefined}></Heading>
      <Description>
        I build Web Applications and live in NY. I have worked in IT for many
        years with various roles at companies such as&nbsp;
        <Link
          theme={theme}
          href="https://www.apple.com"
          target="_blank"
          rel="noopener"
        >
          Apple
        </Link>
        ,&nbsp;
        <Link
          theme={theme}
          href="https://www.enjoy.com"
          target="_blank"
          rel="noopener"
        >
          Enjoy
        </Link>
        ,&nbsp;
        <Link
          theme={theme}
          href="https://about.facebook.com/"
          target="_blank"
          rel="noopener"
        >
          Facebook
        </Link>
        , and&nbsp;
        <Link
          theme={theme}
          href="https://www.uber.com/"
          target="_blank"
          rel="noopener"
        >
          Uber
        </Link>
        . I've been a Help Desk Technician, a Project Coordinator, Program
        manager, and now Software Engineer. I am currently at&nbsp;
        <Link
          theme={theme}
          href="https://amplify.com/"
          target="_blank"
          rel="noopener"
        >
          Amplify
        </Link>
        &nbsp;as a Software Engineer.
      </Description>
    </GlobalStyle>
  );
};

const GlobalStyle = styled.div(
  ({ theme }) => `
  background: ${theme.bg.primary};
  color: ${theme.text.primary};
  min-height: 100vh;
  height: 100%;
`
);

const Link = styled.a(
  ({ theme }) => `
  color: ${theme.link.primary};
  text-decoration: none;
  :hover {
    text-shadow: 0 0 6px ${theme.text.primary};
  }
`
);

const ProfilePhoto = styled.img(
  ({ theme }) => `
  position: absolute;
  margin: 85px 0px 0px 110px;
  border: 2px solid ${theme.link.primary};
  width: 110px;
  height: 110px;
  border-radius: 50%;
`
);
export default Home;
