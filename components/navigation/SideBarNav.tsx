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

import { styled, theme } from "../../stitches.config";
import NavLink from "./NavLink";

const SideBarNav = () => {
  return (
    <SideBarContainer>
      <LinksWrapper>
        <NavLink
          href="/"
          text="home"
          icon={<House size="24" color="currentColor" />}
          activeIcon={
            <HouseSimple color="currentColor" weight="fill" size="24" />
          }
        />

        <NavLink
          href="/work"
          text="work"
          icon={<Folder size="24" color="currentColor" />}
          activeIcon={
            <FolderOpen color="currentColor" weight="fill" size="24" />
          }
        />

        <NavLink
          href="/me"
          text="about"
          icon={<Smiley size="24" color="currentColor" />}
          activeIcon={
            <SmileyXEyes color="currentColor" weight="fill" size="24" />
          }
        />

        <NavLink
          href="/hello"
          text="contact"
          icon={<ChatTeardropText size="24" color="currentColor" />}
          activeIcon={
            <ChatTeardrop color="currentColor" weight="fill" size="24" />
          }
        />
        <NavLink
          href="/blog"
          text="Blog"
          icon={<Article size="24" color="currentColor" />}
          activeIcon={<Article color="currentColor" weight="fill" size="24" />}
        />
      </LinksWrapper>
    </SideBarContainer>
  );
};

export default SideBarNav;

const SideBarContainer = styled("div", {
  display: "none",

  "@bp1": {
    width: "256px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    height: "100%",
    borderRight: "solid 1px $border",
    position: "fixed",
    top: 0,
    left: 0,
    padding: "$5",
    zIndex: 1,
  },
});

const LinksWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridGap: "16px",
  width: "100%",
  alignItems: "start",
  justifyContent: "start",
});
