import React from "react";

import Navigation from "./Navigation";
import SideBar from "./SideBar";
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
      {children}
    </div>
  );
};

export default Layout;
