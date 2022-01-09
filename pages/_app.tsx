import type { AppProps } from "next/app";
import { ThemeProvider } from "../styles/ThemeProvider/ThemeProvider";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
