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
  height: "calc(32px + 16px + 24px)",
  zIndex: "2",
  paddingTop: "16px",

  h1: {
    fontSize: "16px",
    letterSpacing: "-0.5px",
  },

  "@bp1": {
    left: "calc(6rem + 128px)",
    height: "calc(4.5rem + 24px)",
    paddingLeft: "32px",
    paddingTop: "0px",
  },
});
