import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";

import type { NextPage } from "next";
import type { ReactElement } from "react";

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>zolly</title>
        <meta name="description" content="Cameron Zollinger's portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </div>
  );
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
