import { useTheme } from "next-themes";
import { SunHorizon, MoonStars } from "phosphor-react";

import { styled } from "../stitches.config";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeToggleContainer onClick={toggleTheme}>
      {theme === "dark" ? (
        <SunHorizon size="24" weight="fill" />
      ) : (
        <MoonStars size="24" weight="fill" />
      )}
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;

const ThemeToggleContainer = styled("div", {
  position: "fixed",
  bottom: "64px",
  left: "64px",
  cursor: "pointer",
  zIndex: 2,
});
