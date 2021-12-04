import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
