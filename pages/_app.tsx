import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "../styles/ThemeProvider/ThemeProvider";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </ThemeProvider>
  );
}

export default MyApp;
