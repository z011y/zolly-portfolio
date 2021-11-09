import Layout from "../components/Layout";
import { Warning } from "phosphor-react";
import { styled } from "../stitches.config";
import PageTitle from "../components/PageTitle";

import type { ReactElement } from "react";

const Me = () => {
  return (
    <AboutContainer>
      <PageTitle text="About" />
      <Warning size="24" style={{ marginRight: "16px" }} />
      This page is currently under construction. Try again later!
    </AboutContainer>
  );
};

export default Me;

Me.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const AboutContainer = styled("div", {
  display: "flex",
  paddingTop: "153px",
  paddingLeft: "32px",

  "@bp1": {
    paddingTop: "105px",
  },
});
