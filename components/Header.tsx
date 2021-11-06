import { GithubLogo, InstagramLogo } from "phosphor-react";

import { styled, theme } from "../stitches.config";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        fillColor={theme.colors.accent}
        strokeColor={theme.colors.border}
        width={24}
        height={24}
      />
      <SocialsWrapper>
        <GithubLogo size="24" />
        <InstagramLogo size="24" />
      </SocialsWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  maxWidth: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$4",
  zIndex: "2",

  "@bp1": {
    padding: "$5",
  },
});

const SocialsWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridGap: "16px",
});
