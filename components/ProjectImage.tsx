import Image from "next/image";
import { styled } from "../stitches.config";

const ProjectImage = () => {
  return (
    <ImageContainer>
      <Image
        src="https://cgjozolfjraxtassnfqe.supabase.in/storage/v1/object/sign/work_images/samplePink.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3b3JrX2ltYWdlcy9zYW1wbGVQaW5rLnBuZyIsImlhdCI6MTYzNjgzMTc0NywiZXhwIjoxOTUyMTkxNzQ3fQ.VBC4B_KcRBK3dr9Pod-gF8_YEHZvHlLTDd5HWAe_TPQ"
        alt="project-image"
        width="512px"
        height="512px"
      />
    </ImageContainer>
  );
};

export default ProjectImage;

const ImageContainer = styled("div", {
  width: "512px",
  height: "512px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
