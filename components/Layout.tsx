import React from "react";

import { styled } from "../stitches.config";
import Navigation from "./navigation/Navigation";
import SideBar from "./navigation/SideBarNav";
import ThemeToggle from "./ThemeToggle";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navigation />
      <SideBar />
      <ThemeToggle />
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
