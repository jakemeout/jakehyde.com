import type { NextPage } from "next";
import { useTheme } from "../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";
import Heading from "../src/components/Heading";
// import styled from "styled-components";

const Home: NextPage = () => {
  const { theme } = useTheme();

  return (
    <GlobalStyle theme={theme}>
      <Heading>Hi I'm Jake</Heading>
    </GlobalStyle>
  );
};

const GlobalStyle = styled.body(
  ({ theme }) => `
  background: ${theme.bg.primary};
  color: ${theme.text.primary};
  display: flex;
  justify-content: center;
`
);
export default Home;
