import { styled } from "../../stitches.config";

import ProjectImage from "./ProjectImage";

type ProjectImageCarouselProps = {
  images: string[];
};

const ProjectImageCarousel = ({ images }: ProjectImageCarouselProps) => {
  const renderImages = () => {
    return images.map((image, index) => {
      return <ProjectImage key={index} image={image} />;
    });
  };

  return <CarouselContainer>{renderImages()}</CarouselContainer>;
};

export default ProjectImageCarousel;

const CarouselContainer = styled("div", {
  display: "flex",
  scrollSnapType: "x mandatory",
  overflowX: "scroll",
  transform: "translateX(-32px)",

  "@bp1": {
    paddingLeft: "32px",
  },

  "::-webkit-scrollbar": {
    display: "none",
  },
});
