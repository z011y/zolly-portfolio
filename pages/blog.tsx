import Layout from "../components/Layout";
import { styled } from "../stitches.config";
import { Warning } from "phosphor-react";
import PageTitle from "../components/PageTitle";

import type { ReactElement } from "react";

const Blog = () => {
  return (
    <BlogContainer>
      <PageTitle text="Blog" />
      <Warning size="24" style={{ marginRight: "16px" }} />
      This page is currently under construction. Try again later!
    </BlogContainer>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const BlogContainer = styled("div", {
  display: "flex",
  paddingTop: "153px",
  paddingLeft: "32px",

  "@bp1": {
    paddingTop: "105px",
  },
});
