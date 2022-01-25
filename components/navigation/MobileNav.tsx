import { styled, theme } from "../../stitches.config";

import {
  HomeIcon,
  CrumpledPaperIcon,
  ChatBubbleIcon,
  PersonIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

import NavLink from "./NavLink";

const MobileNav = () => {
  return (
    <MobileNavContainer>
      <NavLink
        href="/"
        text="Home"
        icon={<HomeIcon style={{ width: "16px", height: "16px" }} />}
      />
      <NavLink
        href="/work"
        text="Projects"
        icon={<CrumpledPaperIcon style={{ width: "16px", height: "16px" }} />}
      />
      <NavLink
        href="/me"
        text="About"
        icon={<ChatBubbleIcon style={{ width: "16px", height: "16px" }} />}
      />
      <NavLink
        href="/hello"
        text="Contact"
        icon={<PersonIcon style={{ width: "16px", height: "16px" }} />}
      />
      <NavLink
        href="/blog"
        text="Blog"
        icon={<ReaderIcon style={{ width: "16px", height: "16px" }} />}
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
