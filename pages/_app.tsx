import { ThemeProvider } from "next-themes";
import { IdProvider } from "@radix-ui/react-id";

import { globalStyles, darkTheme, dimTheme } from "../stitches.config";

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
    <IdProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        themes={["light", "dark", "dim"]}
        value={{
          light: "light-theme",
          dark: darkTheme.className,
          dim: dimTheme.className,
        }}
        defaultTheme="system"
      >
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </IdProvider>
  );
}

export default App;
