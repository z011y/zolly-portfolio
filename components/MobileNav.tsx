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
  Article,
} from "phosphor-react";

import NavLink from "./NavLink";

const MobileNav = () => {
  return (
    <MobileNavContainer>
      <NavLink
        href="/"
        text="Home"
        icon={<House size="18" />}
        activeIcon={<HouseSimple color="#0091FF" weight="fill" size="18" />}
      />
      <NavLink
        href="/work"
        text="Work"
        icon={<Folder size="18" />}
        activeIcon={<FolderOpen color="#0091FF" weight="fill" size="18" />}
      />
      <NavLink
        href="/me"
        text="Me"
        icon={<Smiley size="18" />}
        activeIcon={<SmileyXEyes color="#0091FF" weight="fill" size="18" />}
      />
      <NavLink
        href="/hello"
        text="Hello"
        icon={<ChatTeardropText size="18" />}
        activeIcon={<ChatTeardrop color="#0091FF" weight="fill" size="18" />}
      />
      <NavLink
        href="/blog"
        text="Blog"
        icon={<Article size="18" />}
        activeIcon={<Article color="#0091FF" weight="fill" size="18" />}
      />
    </MobileNavContainer>
  );
};

export default MobileNav;

const MobileNavContainer = styled("div", {
  height: "48px",
  width: "100%",
  maxWidth: "100%",
  overflowX: "scroll",
  overflowY: "hidden",
  borderBottom: "1px solid $border",
  display: "flex",
  alignItems: "center",
  paddingLeft: "32px",
  paddingRight: "16px",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@bp1": {
    display: "none",
  },
});
