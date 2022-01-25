import { useTheme } from "next-themes";
import { useState } from "react";
import { SunIcon, BlendingModeIcon, MoonIcon } from "@radix-ui/react-icons";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { styled, theme } from "../stitches.config";

type ThemeToggleProps = {
  triggerIsOpen: boolean;
  setTriggerIsOpen: Function;
  isMobile: boolean;
};

const ThemeToggle = ({
  triggerIsOpen,
  setTriggerIsOpen,
  isMobile,
}: ThemeToggleProps) => {
  const { resolvedTheme, setTheme, systemTheme } = useTheme();
  const [activeTheme, setActiveTheme] = useState(resolvedTheme);

  const onThemeChange = (value: string) => {
    setTheme(value);
    setActiveTheme(value);
    isMobile ? setTriggerIsOpen(!triggerIsOpen) : null;
  };

  return (resolvedTheme && !isMobile) ||
    (resolvedTheme && isMobile && triggerIsOpen) ? (
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
          <MoonIcon style={{ width: "16px", height: "16px" }} />
        </ToggleGroupItem>

        <ToggleGroupItem
          value="dim"
          disabled={activeTheme === "dim" ? true : false}
          aria-label="Dim theme"
        >
          <BlendingModeIcon style={{ width: "16px", height: "16px" }} />
        </ToggleGroupItem>

        <ToggleGroupItem
          value="light"
          disabled={activeTheme === "light" ? true : false}
          aria-label="Light theme"
        >
          <SunIcon style={{ width: "16px", height: "16px" }} />
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
    left: "3rem",
    bottom: "2.25rem",
  },
});

const ToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr",
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
  width: "42px",
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
