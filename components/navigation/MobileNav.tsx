import { styled, theme } from "../../stitches.config";

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
        icon={<House size="16" />}
        activeIcon={
          <HouseSimple
            color={theme.colors.accentText}
            weight="fill"
            size="16"
          />
        }
      />
      <NavLink
        href="/work"
        text="Work"
        icon={<Folder size="16" />}
        activeIcon={
          <FolderOpen color={theme.colors.accentText} weight="fill" size="16" />
        }
      />
      <NavLink
        href="/me"
        text="About"
        icon={<Smiley size="16" />}
        activeIcon={
          <SmileyXEyes
            color={theme.colors.accentText}
            weight="fill"
            size="16"
          />
        }
      />
      <NavLink
        href="/hello"
        text="Contact"
        icon={<ChatTeardropText size="16" />}
        activeIcon={
          <ChatTeardrop
            color={theme.colors.accentText}
            weight="fill"
            size="16"
          />
        }
      />
      <NavLink
        href="/blog"
        text="Blog"
        icon={<Article size="16" />}
        activeIcon={
          <Article color={theme.colors.accentText} weight="fill" size="16" />
        }
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
  backgroundColor: "$background",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@bp1": {
    display: "none",
  },
});
