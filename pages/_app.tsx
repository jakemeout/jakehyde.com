import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { SessionProvider } from "next-auth/react";
import { getServerSideProps } from "next/dist/build/templates/pages";

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default App;
