import Layout from "../components/Layout";
import { styled } from "../stitches.config";
import { Warning } from "phosphor-react";
import PageTitle from "../components/PageTitle";

import type { ReactElement } from "react";

const Hello = () => {
  return (
    <ContactContainer>
      <PageTitle text="Contact" />
      <Warning size="24" style={{ marginRight: "16px" }} />
      This page is currently under construction. Try again later!
    </ContactContainer>
  );
};

export default Hello;

Hello.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const ContactContainer = styled("div", {
  display: "flex",
  paddingTop: "153px",
  paddingLeft: "32px",

  "@bp1": {
    paddingTop: "105px",
  },
});
