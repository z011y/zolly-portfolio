import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { styled } from "../stitches.config";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

import type { ReactElement } from "react";

const Me = () => {
  return (
    <AboutContainer>
      <PageTitle text="About" />
      <ExclamationTriangleIcon
        style={{ width: "24px", height: "24px", marginRight: "16px" }}
      />
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
