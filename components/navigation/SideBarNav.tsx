import {
  HomeIcon,
  CrumpledPaperIcon,
  ChatBubbleIcon,
  PersonIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

import { styled, theme } from "../../stitches.config";
import NavLink from "./NavLink";

const SideBarNav = () => {
  return (
    <SideBarContainer>
      <LinksWrapper>
        <NavLink
          href="/"
          text="home"
          icon={<HomeIcon style={{ width: "16px", height: "16px" }} />}
        />

        <NavLink
          href="/work"
          text="projects"
          icon={<CrumpledPaperIcon style={{ width: "16px", height: "16px" }} />}
        />

        <NavLink
          href="/me"
          text="about"
          icon={<PersonIcon style={{ width: "16px", height: "16px" }} />}
        />

        <NavLink
          href="/hello"
          text="contact"
          icon={<ChatBubbleIcon style={{ width: "16px", height: "16px" }} />}
        />
        <NavLink
          href="/blog"
          text="Blog"
          icon={<ReaderIcon style={{ width: "16px", height: "16px" }} />}
        />
      </LinksWrapper>
    </SideBarContainer>
  );
};

export default SideBarNav;

const SideBarContainer = styled("div", {
  display: "none",

  "@bp1": {
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
  gridGap: "24px",
  width: "128px",
  alignItems: "start",
  justifyContent: "start",
});
