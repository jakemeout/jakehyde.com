import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
