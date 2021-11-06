import Layout from "../components/Layout";

import type { ReactElement } from "react";

const Me = () => {
  return <div></div>;
};

export default Me;

Me.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
