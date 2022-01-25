import Link from "next/link";
import { useState } from "react";

import { styled } from "../stitches.config";

const SideBarRight = () => {
  return <SideBarContainer></SideBarContainer>;
};

export default SideBarRight;

const SideBarContainer = styled("div", {
  display: "none",

  "@bp1": {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "$background",
    borderLeft: "solid 1px $border",
    position: "fixed",
    top: 0,
    right: 0,
    padding: "$5",
    zIndex: 1,
  },
});
