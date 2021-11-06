import Layout from "../components/Layout";

import type { ReactElement } from "react";

const Work = () => {
  return <div></div>;
};

export default Work;

Work.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
