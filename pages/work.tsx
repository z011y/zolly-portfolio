import Layout from "../components/Layout";
import { styled } from "../stitches.config";
import PageTitle from "../components/PageTitle";
import { Warning, FileText } from "phosphor-react";
import SideBarRight from "../components/SideBarRight";
import FixedButton from "../components/FixedButton";
import ProjectImage from "../components/ProjectImage";

import type { ReactElement } from "react";

const Work = () => {
  return (
    <WorkContainer>
      <PageTitle text="Projects" />

      <SnapScrollContainer>
        <Section>
          <h4 style={{ marginBottom: "16px" }}>
            CYPRESS-SPELLBOOK <span style={{ color: "white" }}>↗︎</span>
          </h4>
          <ProjectImage />
          <h2 style={{ marginTop: "32px" }}>
            A collection of custom Cypress commands for common components
          </h2>
        </Section>
        <Section>
          <h4>HERBIVORE</h4>
        </Section>
      </SnapScrollContainer>

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
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
});

const SnapScrollContainer = styled("div", {
  maxHeight: "100vh",
  overflowY: "scroll",
  scrollSnapType: "y mandatory",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  scrollSnapAlign: "start",
  paddingLeft: "32px",
  paddingTop: "159px",

  "@bp1": {
    paddingTop: "105px",
  },
});
