import { useTheme } from "next-themes";
import { useState } from "react";
import { Sun, SunHorizon, MoonStars } from "phosphor-react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { styled, theme } from "../stitches.config";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme, systemTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState(resolvedTheme);

  const onThemeChange = (value: string) => {
    setTheme(value);
    setActiveTheme(value);
  };

  return resolvedTheme ? (
    <ThemeToggleContainer>
      <ToggleGroup
        type="single"
        defaultValue={resolvedTheme}
        onValueChange={onThemeChange}
        aria-label="Theme toggle"
      >
        <ToggleGroupItem
          value="dark"
          disabled={activeTheme === "dark" ? true : false}
          aria-label="Dark theme"
        >
          <MoonStars size="18" color="currentColor" />
        </ToggleGroupItem>

        <ToggleGroupItem
          value="dim"
          disabled={activeTheme === "dim" ? true : false}
          aria-label="Dim theme"
        >
          <SunHorizon size="18" color="currentColor" />
        </ToggleGroupItem>

        <ToggleGroupItem
          value="light"
          disabled={activeTheme === "light" ? true : false}
          aria-label="Light theme"
        >
          <Sun size="18" color="currentColor" />
        </ToggleGroupItem>
      </ToggleGroup>
    </ThemeToggleContainer>
  ) : null;
};

export default ThemeToggle;

const ThemeToggleContainer = styled("div", {
  position: "fixed",
  bottom: "32px",
  left: "32px",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@bp1": {
    left: "64px",
  },
});

const ToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr",
  width: "42px",
  height: "128px",
  borderRadius: "8px",
  backgroundColor: "$accent",
  border: "1px solid $border",

  "@bp1": {
    gridTemplateColumns: "1fr 1fr 1fr",
    height: "44px",
    width: "128px",
  },
});

const ToggleGroupItem = styled(ToggleGroupPrimitive.Item, {
  borderRadius: "8px",
  border: "none",
  backgroundColor: "rgba(0, 0, 0, 0)",
  height: "42px",
  color: "$text",

  "&[data-state=on]": {
    backgroundColor: "$background",

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "$background",
    },
  },

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "$accentHover",
  },
});
