import Document, { Html, Head, Main, NextScript } from "next/document";

import { getCssText } from "../stitches.config";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Inter:wght@400;700;900&display=swap"
            rel="stylesheet"
          />

          {/* <link rel="mask-icon" href="mask-icon.svg" color="#000000" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="manifest" href="manifest.json" />
          <meta name="theme-color" content="#000000" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
