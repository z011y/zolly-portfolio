import Layout from "../components/Layout";

import type { ReactElement } from "react";

const Hello = () => {
  return <div></div>;
};

export default Hello;

Hello.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
