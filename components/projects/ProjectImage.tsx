import Image from "next/image";

import { styled } from "../../stitches.config";

type ProjectImageProps = {
  image: string;
};

const ProjectImage = ({ image }: ProjectImageProps) => {
  return (
    <ImageContainer>
      <Image
        src={image}
        alt="project-image"
        width="1024px"
        height="1024px"
        placeholder="blur"
        blurDataURL={"data:image/png;base64,c3BlbGxib29rQmx1ci5wbmcK"}
      />
    </ImageContainer>
  );
};

export default ProjectImage;

const ImageContainer = styled("div", {
  minWidth: "calc(100vw - 64px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "32px",
  scrollSnapAlign: "start",

  "@bp1": {
    minWidth: "calc(100vw - 256px - 400px - 192px)",
    scrollMarginLeft: "32px",
  },
});
