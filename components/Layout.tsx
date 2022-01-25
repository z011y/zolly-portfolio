import React, { useState, useEffect } from "react";
import { styled } from "../stitches.config";

import Navigation from "./navigation/Navigation";
import SideBar from "./navigation/SideBarNav";
import ThemeToggle from "./ThemeToggle";
import MobileThemeToggleTrigger from "./MobileThemeToggleTrigger";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [triggerIsOpen, setTriggerIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 415);
  });

  return (
    <div>
      <Navigation />
      <SideBar />
      <ThemeToggle
        triggerIsOpen={triggerIsOpen}
        setTriggerIsOpen={setTriggerIsOpen}
        isMobile={isMobile}
      />
      {isMobile ? (
        <MobileThemeToggleTrigger
          triggerIsOpen={triggerIsOpen}
          setTriggerIsOpen={setTriggerIsOpen}
        />
      ) : null}
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;

const Main = styled("main", {
  display: "flex",
  flexDirection: "column",

  "@bp1": {
    paddingLeft: "256px",
  },
});
