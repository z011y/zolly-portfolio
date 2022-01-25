import { GitHubLogoIcon, CodeSandboxLogoIcon } from "@radix-ui/react-icons";

import { styled, theme } from "../../stitches.config";
import Logo from "../Logo";
import LogoText from "../LogoText";
import MobileNav from "./MobileNav";

type NavigationProps = {
  isMobile: boolean;
};

const Navigation = ({ isMobile }: NavigationProps) => {
  return (
    <NavigationContainer>
      <HeaderContainer>
        <LogoWrapper>
          <Logo
            fillColor={theme.colors.accent}
            strokeColor={theme.colors.border}
            primaryColor={theme.colors.primary}
            width={24}
            height={24}
          />
          {!isMobile ? <LogoText /> : null}
        </LogoWrapper>
        <SocialsWrapper>
          <a href="https://github.com/z011y" target="_blank" rel="noreferrer">
            <GitHubLogoIcon style={{ width: "24px", height: "24px" }} />
          </a>
          <a
            href="https://codesandbox.io/u/z011y"
            target="_blank"
            rel="noreferrer"
          >
            <CodeSandboxLogoIcon style={{ width: "24px", height: "24px" }} />
          </a>
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
  borderBottom: "1px solid $border",
  background: "$header",
  "-webkit-backdrop-filter": "saturate(180%) blur(20px)",
  backdropFilter: "saturate(180%) blur(20px)",

  "@bp1": {
    padding: "$3 $5",
  },
});

const LogoWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridGap: "8px",
  justifyContent: "center",
  alignItems: "center",
});

const SocialsWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridGap: "16px",

  a: {
    width: "24px",
    height: "24px",
  },
});
