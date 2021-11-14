import { styled } from "../../stitches.config";

type ProjectStackProps = {
  stackItems: string[];
};

const ProjectStack = ({ stackItems }: ProjectStackProps) => {
  const renderStackItems = () => {
    return stackItems.map((item, index) => {
      return <ProjectStackItem key={index}>{item}</ProjectStackItem>;
    });
  };
  return <ProjectStackContainer>{renderStackItems()}</ProjectStackContainer>;
};

export default ProjectStack;

const ProjectStackContainer = styled("div", {
  height: "48px",
  width: "100%",
  maxWidth: "100%",
  overflowX: "scroll",
  overflowY: "hidden",
  borderBottom: "1px solid $border",
  display: "flex",
  alignItems: "center",
  paddingLeft: "16px",
  paddingRight: "16px",
  backgroundColor: "$background",
  transform: "translateX(-32px)",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@bp1": {
    display: "none",
  },
});

const ProjectStackItem = styled("div", {
  marginRight: "8px",
  backgroundColor: "$accent",
  border: "1px solid $border",
  borderRadius: "16px",
  padding: "4px 8px",
  fontSize: "$2",
  fontFamily: "$mono",
  textTransform: "uppercase",
});
