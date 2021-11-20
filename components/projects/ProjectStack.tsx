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
  borderBottom: "1px solid $border",
  borderTop: "1px solid $border",
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
  backgroundColor: "$blueBackground",
  border: "1px solid $blueBorder",
  color: "$accentText",
  borderRadius: "16px",
  padding: "4px 8px",
  fontSize: "$1",
  fontFamily: "$mono",
  textTransform: "uppercase",
});
