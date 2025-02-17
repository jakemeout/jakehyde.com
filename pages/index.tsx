import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";
import Description from "../src/components/Description";
import Heading from "../src/components/Heading";

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Content>
      <Wrapper>
        <ProfilePhoto theme={theme} src={`/JakeGreyBkBridge.png`} />
        <DescriptionContainer>
          <Heading children={undefined}></Heading>
          <Description>
            I am a fullstack Associate Software Engineer at&nbsp;
            <Link
              theme={theme}
              href="https://amplify.com/"
              target="_blank"
              rel="noopener"
            >
              Amplify
            </Link>
            &nbsp;and I live in NY. I've worked in Information Technology for many
            years in a variety of roles such as Help Desk Technician, Project
            Coordinator, Program manager, and now Software Engineer. I've worked
            for companies such as&nbsp;
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
              Meta (formerly Facebook)
            </Link>
            , and&nbsp;
            <Link
              theme={theme}
              href="https://www.uber.com/"
              target="_blank"
              rel="noopener"
            >
              Uber.
            </Link>
          </Description>
        </DescriptionContainer>
      </Wrapper>
    </Content>
  );
};

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
  margin-left: 2rem; // for row layout spacing
  @media screen and (max-width: 600px) {
    margin: 2rem auto 0 auto;
    width: 100%;
  }
`;

const Link = styled.a<{ children?: React.ReactNode; href: string; target?: string; rel?: string }>(
  ({ theme }) => `
  color: ${theme.link.primary};
  text-decoration: none;
  :hover {
    text-shadow: 0 0 6px ${theme.text.primary};
  }
`
);

const Content = styled.div`
  display: flex;
  min-height: 100vh; // ensures full viewport height for vertical centering
  justify-content: center; // center horizontally in desktop
  align-items: center;     // center vertically in desktop
`;

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 800px;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ProfilePhoto = styled.img<{ src: string }>(
  ({ theme }) => `
  margin: 6% auto 0 auto;
  border: 2px solid ${theme.link.primary};
  width: 110px;
  height: 110px;
  border-radius: 50%;
  @media screen and (max-width: 600px) {
    margin: 5% auto 0 auto;
    // Removed width/height scaling so image height stays constant
  }
`
);

export default Home;
