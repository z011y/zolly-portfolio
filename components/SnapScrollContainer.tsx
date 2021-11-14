import { styled } from "../stitches.config";

type SnapScrollContainerProps = {
  children: React.ReactNode;
};

const SnapScrollContainer = ({ children }: SnapScrollContainerProps) => {
  return <ScrollContainer>{children}</ScrollContainer>;
};

export default SnapScrollContainer;

const ScrollContainer = styled("div", {
  maxHeight: "100vh",
  overflowX: "hidden",
  overflowY: "scroll",
  scrollSnapType: "y mandatory",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});
