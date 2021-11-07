import { GithubLogo, InstagramLogo } from "phosphor-react";

import { styled, theme } from "../stitches.config";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Navigation = () => {
  return (
    <NavigationContainer>
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

      <MobileNav />
    </NavigationContainer>
  );
};

export default Navigation;

const NavigationContainer = styled("nav", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  zIndex: "2",
});

const HeaderContainer = styled("div", {
  width: "100%",
  maxWidth: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$4",
  paddingBottom: "$3",
  borderBottom: "1px solid $border",
  background: "$header",
  "-webkit-backdrop-filter": "saturate(180%) blur(5px)",
  backdropFilter: "saturate(180%) blur(10px)",

  "@bp1": {
    padding: "$4 $5",
  },
});

const SocialsWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridGap: "16px",
});
