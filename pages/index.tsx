import type { NextPage } from "next";
import { useTheme } from "../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";
// import styled from "styled-components";

const Home: NextPage = () => {
  const { theme } = useTheme();
  console.log(theme);
  return <GlobalStyle theme={theme}>Hello World!</GlobalStyle>;
};

const GlobalStyle = styled.body`
  background: ${({ theme }) => theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;
export default Home;
