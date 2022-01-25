import React from "react";

import { styled } from "../stitches.config";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import SideBarRight from "../components/SideBarRight";
import FixedButton from "../components/FixedButton";
import ProjectContainer from "../components/projects/ProjectContainer";
import SnapScrollContainer from "../components/SnapScrollContainer";
import ProjectDialog from "../components/Dialog";

import type { ReactElement } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const ProjectDescriptionContext = React.createContext("");

// listen to which section is scrolled to the top of the viewport
// update the current section in the context
// map the description to each section
// FixedButton takes the context provider's value

const Work = () => {
  return (
    <WorkContainer>
      <ProjectDescriptionContext.Provider value="">
        <PageTitle text="Projects" />

        <SnapScrollContainer>
          <Section>
            <ProjectContainer
              title="cypress-spellbook"
              titleLink="/"
              images={[
                "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/spellbookLogo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9zcGVsbGJvb2tMb2dvLnBuZyIsImlhdCI6MTYzNjkxNzczMSwiZXhwIjoxOTUyMjc3NzMxfQ.TPzhWFP1VsJHT7ttz3uV0t6upeRK03_Yj79-jSzdDOE",
                "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/spellbookHome.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9zcGVsbGJvb2tIb21lLnBuZyIsImlhdCI6MTYzNjkxODAxOSwiZXhwIjoxOTUyMjc4MDE5fQ.8AsThMzwH9WwstNuyfeKGwKMhYFVutsWlrHvno6MEBo",
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
                "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/herbivoreLogo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9oZXJiaXZvcmVMb2dvLnBuZyIsImlhdCI6MTYzNjkxODMzOSwiZXhwIjoxOTUyMjc4MzM5fQ.9FTXEaTPlmlwK1_k857cqURvyHc2KYNyWnDTP_8wvps",
                "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/herbivoreHome.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9oZXJiaXZvcmVIb21lLnBuZyIsImlhdCI6MTYzNjkxODM0OSwiZXhwIjoxOTUyMjc4MzQ5fQ.DJQI_0AMTThkOyo99SQ4-BePlITJqD2Qg5TworkK0gY",
                "https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/samplePink.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9zYW1wbGVQaW5rLnBuZyIsImlhdCI6MTYzNjgzMTc0NywiZXhwIjoxOTUyMTkxNzQ3fQ.VBC4B_KcRBK3dr9Pod-gF8_YEHZvHlLTDd5HWAe_TPQ",
              ]}
              description="A safari extension that displays if an item is vegan or not"
            />
          </Section>
        </SnapScrollContainer>

        <SideBarRight />
        <FixedButton
          text="see details"
          icon={
            <InfoCircledIcon
              style={{ width: "16px", height: "16px" }}
              color="white"
            />
          }
          isDialog={true}
        />
      </ProjectDescriptionContext.Provider>
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
  paddingTop: "168px",

  "@bp1": {
    paddingTop: "calc(4.5rem + 56px)",
  },
});
