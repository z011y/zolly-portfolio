import Image from "next/image";

import { styled } from "../../stitches.config";

type ProjectImageProps = {
  image: string;
};

const ProjectImage = ({ image }: ProjectImageProps) => {
  return (
    <ImageContainer>
      <Image src={image} alt="project-image" width="512px" height="512px" />
    </ImageContainer>
  );
};

export default ProjectImage;

const ImageContainer = styled("div", {
  minWidth: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "32px",
  scrollSnapAlign: "start",

  "@bp1": {
    minWidth: "512px",
    minHeight: "512px",
    scrollMarginLeft: "32px",
  },
});
