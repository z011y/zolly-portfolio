import { styled } from "../stitches.config";

type PageTitleProps = {
  text: string;
};

const PageTitle = ({ text }: PageTitleProps) => {
  return (
    <TitleContainer>
      <h1>{text}</h1>
    </TitleContainer>
  );
};

export default PageTitle;

const TitleContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: "0",
  left: "72px",
  height: "89px",
  zIndex: "2",

  h1: {
    fontSize: "18px",
    letterSpacing: "-0.5px",
  },

  "@bp1": {
    left: "256px",
    height: "89px",
    paddingLeft: "32px",
  },
});
