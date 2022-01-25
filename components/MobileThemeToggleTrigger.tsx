import { useState } from "react";
import { styled } from "../stitches.config";
import { useTheme } from "next-themes";
import { SunIcon, BlendingModeIcon, MoonIcon } from "@radix-ui/react-icons";

type MobileThemeToggleTriggerProps = {
  triggerIsOpen: boolean;
  setTriggerIsOpen: Function;
};

const MobileThemeToggleTrigger = ({
  triggerIsOpen,
  setTriggerIsOpen,
}: MobileThemeToggleTriggerProps) => {
  const { theme } = useTheme();

  let activeThemeIcon = () => {
    if (theme === "dark") {
      return <MoonIcon style={{ width: "16px", height: "16px" }} />;
    }
    if (theme === "dim") {
      return <BlendingModeIcon style={{ width: "16px", height: "16px" }} />;
    }
    if (theme === "light") {
      return <SunIcon style={{ width: "16px", height: "16px" }} />;
    }
  };

  return !triggerIsOpen ? (
    <TriggerContainer onClick={() => setTriggerIsOpen(!triggerIsOpen)}>
      {activeThemeIcon()}
    </TriggerContainer>
  ) : null;
};

export default MobileThemeToggleTrigger;

const TriggerContainer = styled("div", {
  position: "fixed",
  bottom: "32px",
  left: "32px",
  width: "44px",
  height: "44px",
  backgroundColor: "$accent",
  border: "1px solid $border",
  borderRadius: "8px",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
