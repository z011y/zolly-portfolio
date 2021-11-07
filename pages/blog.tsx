import Layout from "../components/Layout";

import type { ReactElement } from "react";

const Blog = () => {
  return <div></div>;
};

export default Blog;

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
