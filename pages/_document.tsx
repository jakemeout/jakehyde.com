import Document, {
  Html,
  Head,
  Main,
  NextScript,
  //   DocumentContext,
} from "next/document";
import React from "react";

class CustomDocument extends Document {
  //   static async getInitialProps(ctx: DocumentContext) {
  //     const initialProps = await Document.getInitialProps(ctx);
  //     return { ...initialProps };
  //   }
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
