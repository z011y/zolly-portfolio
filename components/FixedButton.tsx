import { SunHorizon, MoonStars } from "phosphor-react";
import React from "react";

import { styled } from "../stitches.config";

type FixedButtonProps = {
  text: string;
  icon: React.ReactNode;
};

const FixedButton = ({ text, icon }: FixedButtonProps) => {
  return (
    <FixedButtonContainer>
      <ButtonText>{text}</ButtonText>
      {icon}
    </FixedButtonContainer>
  );
};

export default FixedButton;

const FixedButtonContainer = styled("div", {
  position: "fixed",
  bottom: "32px",
  right: "32px",
  cursor: "pointer",
  zIndex: 2,
  backgroundColor: "$primary",
  border: "1px solid $primary",
  padding: "8px 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "8px",
  width: "calc(100vw - 136px)",

  "@bp1": {
    bottom: "64px",
    right: "64px",
    width: "256px",
  },
});

const ButtonText = styled("div", {
  fontSize: "14px",
  fontFamily: "$mono",
  textTransform: "uppercase",
  color: "white",
  letterSpacing: "0.1em",
});
