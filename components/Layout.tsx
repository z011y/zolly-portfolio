import React from "react";

import Header from "./Header";
import SideBar from "./SideBar";
import ThemeToggle from "./ThemeToggle";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <SideBar />
      <ThemeToggle />
      {children}
    </div>
  );
};

export default Layout;
