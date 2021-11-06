import { styled } from "../stitches.config";

import {
  House,
  HouseSimple,
  Folder,
  FolderOpen,
  Smiley,
  SmileyXEyes,
  ChatTeardrop,
  ChatTeardropText,
} from "phosphor-react";

import NavLink from "./NavLink";

const MobileNav = () => {
  return (
    <MobileNavContainer>
      <NavLink
        href="/"
        text="Home"
        icon={<House size="24" />}
        activeIcon={<HouseSimple color="#0091FF" weight="fill" size="24" />}
      />
      <NavLink
        href="/work"
        text="Work"
        icon={<Folder size="24" />}
        activeIcon={<FolderOpen color="#0091FF" weight="fill" size="24" />}
      />
      <NavLink
        href="/me"
        text="Me"
        icon={<Smiley size="24" />}
        activeIcon={<SmileyXEyes color="#0091FF" weight="fill" size="24" />}
      />
      <NavLink
        href="/hello"
        text="Hello"
        icon={<ChatTeardropText size="24" />}
        activeIcon={<ChatTeardrop color="#0091FF" weight="fill" size="24" />}
      />
    </MobileNavContainer>
  );
};

export default MobileNav;

const MobileNavContainer = styled("div", {
  height: "32px",
  width: "100%",
  maxWidth: "100%",
  overflowX: "scroll",
  overflowY: "hidden",
  borderBottom: "1px solid $border",
  display: "flex",
  alignItems: "center",
  paddingLeft: "32px",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@bp1": {
    display: "none",
  },
});
