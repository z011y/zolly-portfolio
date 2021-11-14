import { Warning, FileText } from "phosphor-react";

import { styled } from "../stitches.config";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import SideBarRight from "../components/SideBarRight";
import FixedButton from "../components/FixedButton";
import ProjectContainer from "../components/projects/ProjectContainer";
import SnapScrollContainer from "../components/SnapScrollContainer";

import type { ReactElement } from "react";

const Work = () => {
  return (
    <WorkContainer>
      <PageTitle text="Projects" />

      <SnapScrollContainer>
        <Section>
          <ProjectContainer
            title="cypress-spellbook"
            titleLink="/"
            images={[
              "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/samplePink.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9zYW1wbGVQaW5rLnBuZyIsImlhdCI6MTYzNjgzMTc0NywiZXhwIjoxOTUyMTkxNzQ3fQ.VBC4B_KcRBK3dr9Pod-gF8_YEHZvHlLTDd5HWAe_TPQ",
              "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/samplepic.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9zYW1wbGVwaWMucG5nIiwiaWF0IjoxNjM2ODY5Mjk0LCJleHAiOjE5NTIyMjkyOTR9.T5NlMXttg8JvydA9kS6XV4sjQOOVr4nnV2BU1yKTOtM",
              "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/samplePink.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9zYW1wbGVQaW5rLnBuZyIsImlhdCI6MTYzNjgzMTc0NywiZXhwIjoxOTUyMTkxNzQ3fQ.VBC4B_KcRBK3dr9Pod-gF8_YEHZvHlLTDd5HWAe_TPQ",
            ]}
            description="A collection of custom Cypress commands for common components"
          />
        </Section>
        <Section>
          <ProjectContainer
            title="herbivore"
            titleLink="/"
            images={[
              "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/samplePink.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9zYW1wbGVQaW5rLnBuZyIsImlhdCI6MTYzNjgzMTc0NywiZXhwIjoxOTUyMTkxNzQ3fQ.VBC4B_KcRBK3dr9Pod-gF8_YEHZvHlLTDd5HWAe_TPQ",
              "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/samplepic.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9zYW1wbGVwaWMucG5nIiwiaWF0IjoxNjM2ODY5Mjk0LCJleHAiOjE5NTIyMjkyOTR9.T5NlMXttg8JvydA9kS6XV4sjQOOVr4nnV2BU1yKTOtM",
              "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/samplePink.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9zYW1wbGVQaW5rLnBuZyIsImlhdCI6MTYzNjgzMTc0NywiZXhwIjoxOTUyMTkxNzQ3fQ.VBC4B_KcRBK3dr9Pod-gF8_YEHZvHlLTDd5HWAe_TPQ",
            ]}
            description="A safari extension that displays if an item is vegan or not"
          />
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

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  scrollSnapAlign: "start",
  paddingLeft: "32px",
  paddingTop: "143px",

  "@bp1": {
    paddingTop: "105px",
  },
});
