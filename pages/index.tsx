import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";

import type { ReactElement } from "react";

const Page = () => {
  return (
    <div>
      <Head>
        <title>zolly</title>
        <meta name="description" content="Cameron Zollinger's portfolio" />
      </Head>
    </div>
  );
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
