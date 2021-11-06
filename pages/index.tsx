import Head from "next/head";
import Image from "next/image";

import { theme } from "../stitches.config";
import Layout from "../components/Layout";

import type { ReactElement } from "react";

const Page = () => {
  return (
    <div>
      <Head>
        <title>zolly</title>
        <meta name="description" content="Cameron Zollinger's portfolio" />
        <meta
          name="theme-color"
          content="#FFFFFF"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
    </div>
  );
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
