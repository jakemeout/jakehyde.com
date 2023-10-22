import type { NextPage, GetStaticProps } from "next";
import styled, { useTheme } from "styled-components";
import Heading from "../src/components/Heading";
import Description from "../src/components/Description";
// import prisma from "../lib/prisma";

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Content>
      <ProfilePhoto theme={theme} src={`/JakeGreyBkBridge.png`} />
      <DescriptionContainer>
        <Heading children={undefined}></Heading>
        <Description>
          I am a fullstack Software Engineer at&nbsp;
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
    </Content>
  );
};

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8% 0 0 3%;
  width: 60%;
`;

const Link = styled.a(
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
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ProfilePhoto = styled.img(
  ({ theme }) => `
  margin: 6% 0px 0px 110px;
  border: 2px solid ${theme.link.primary};
  width: 110px;
  height: 110px;
  border-radius: 50%;
  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }
`
);

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// };
