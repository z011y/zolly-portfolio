import Layout from "../components/Layout";
import { styled } from "../stitches.config";
import PageTitle from "../components/PageTitle";
import { Warning, FileText } from "phosphor-react";
import SideBarRight from "../components/SideBarRight";
import FixedButton from "../components/FixedButton";

import type { ReactElement } from "react";

const Work = () => {
  return (
    <WorkContainer>
      <PageTitle text="Projects" />
      <ProjectContainer>
        <Warning size="24" style={{ marginRight: "16px" }} />
        This page is currently under construction. Try again later!
      </ProjectContainer>
      <SideBarRight />
      <FixedButton
        text="resume"
        icon={<FileText size="24" color="white" />}
        link="/work"
      />
    </WorkContainer>
  );
};

export default Work;

Work.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const WorkContainer = styled("div", {
  display: "flex",
  paddingTop: "153px",
  paddingLeft: "32px",

  "@bp1": {
    paddingTop: "105px",
  },
});

const ProjectContainer = styled("div", {
  display: "flex",
});
