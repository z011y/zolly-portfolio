import { ThemeProvider } from "next-themes";
import Head from "next";

import { globalStyles, darkTheme } from "../stitches.config";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  globalStyles();

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: "light-theme", dark: darkTheme.className }}
      defaultTheme="system"
    >
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default App;
