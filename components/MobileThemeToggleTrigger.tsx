import { useState } from "react";
import { styled } from "../stitches.config";
import { useTheme } from "next-themes";
import { Sun, SunHorizon, MoonStars } from "phosphor-react";

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
      return <MoonStars size="18" color="currentColor" />;
    }
    if (theme === "dim") {
      return <SunHorizon size="18" color="currentColor" />;
    }
    if (theme === "light") {
      return <Sun size="18" color="currentColor" />;
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
