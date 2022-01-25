import React from "react";
import Link from "next/link";

import Dialog, { DialogTrigger } from "./Dialog";

import { styled } from "../stitches.config";

type FixedButtonProps = {
  text: string;
  icon: React.ReactNode;
  link?: string;
  isDialog?: boolean;
};

const FixedButton = ({ text, icon, link, isDialog }: FixedButtonProps) => {
  return (
    <>
      {isDialog ? (
        <>
          <Dialog>
            <DialogButton>
              <ButtonText>{text}</ButtonText>
              {icon}
            </DialogButton>
          </Dialog>
          <FixedBackground></FixedBackground>
        </>
      ) : (
        <>
          <Link href={link ? link : ""} passHref>
            <FixedButtonContainer>
              <ButtonText>{text}</ButtonText>
              {icon}
            </FixedButtonContainer>
          </Link>
          <FixedBackground></FixedBackground>
        </>
      )}
    </>
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

  "&:hover": {
    backgroundColor: "$primaryHover",
  },

  "@bp1": {
    bottom: "32px",
    right: "64px",
    width: "304px",
  },
});

const DialogButton = styled(DialogTrigger, {
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

  "&:hover": {
    backgroundColor: "$primaryHover",
  },

  "@bp1": {
    bottom: "32px",
    right: "64px",
    width: "304px",
  },
});

const ButtonText = styled("div", {
  fontSize: "14px",
  fontFamily: "$mono",
  textTransform: "uppercase",
  color: "white",
  letterSpacing: "0.1em",
});

const FixedBackground = styled("div", {
  position: "fixed",
  bottom: "0",
  width: "100vw",
  height: "53px",
  backgroundColor: "$header",
  "-webkit-backdrop-filter": "saturate(180%) blur(5px)",
  backdropFilter: "saturate(180%) blur(10px)",
  borderTop: "1px solid $border",

  "@bp1": {
    display: "none",
  },
});
