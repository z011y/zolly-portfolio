import { styled } from "../../stitches.config";

import ProjectImageCarousel from "./ProjectImageCarousel";
import ProjectStack from "./ProjectStack";

type ProjectContainerProps = {
  title: string;
  titleLink: string;
  images: string[];
  description: string;
};

const ProjectContainer = ({
  title,
  titleLink,
  images,
  description,
}: ProjectContainerProps) => {
  return (
    <Container>
      <ProjectTitle>{title} ↗︎</ProjectTitle>
      <ProjectImageCarousel images={images} />
      <ProjectStack
        stackItems={["cypress", "javascript", "jest", "typescript", "react"]}
      />
    </Container>
  );
};

export default ProjectContainer;

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "calc(100vw + 32px)",

  "::-webkit-scrollbar": {
    display: "none",
  },

  "@bp1": {
    maxWidth: "calc(100vw - 256px - 400px)",
  },
});

const ProjectTitle = styled("h4", {
  marginBottom: "16px",
});
