import type { NextPage } from "next";
import { useTheme } from "../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";
import Heading from "../src/components/Heading";
import Navbar from "../src/components/Navbar";
// import styled from "styled-components";

const Home: NextPage = () => {
  const { theme } = useTheme();

  return (
    <GlobalStyle theme={theme}>
      <Navbar />
      <Heading>Hi I'm Jake</Heading>
    </GlobalStyle>
  );
};

const GlobalStyle = styled.div(
  ({ theme }) => `
  background: ${theme.bg.primary};
  color: ${theme.text.primary};
`
);
export default Home;
