import { createStitches } from "@stitches/react";

import { slate, slateDark, blue, blueDark } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  theme,
  createTheme,
  config,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      ...slate,
      ...blue,

      background: "$slate1",
      backgroundHover: "#fff",
      accent: "$slate4",
      accentHover: "$slate5",
      border: "$slate7",
      text: "#000",
      accentText: "$blue11",

      primary: "$blue9",
      primaryHover: "$blue10",

      blueBackground: "$blue3",
      blueBorder: "$blue6",

      header: "rgba(251, 252, 253, 0.66)",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
      7: "256px",
      8: "512px",
      9: "1024px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "18px",
      5: "20px",
      6: "24px",
      7: "32px",
    },
    fonts: {
      normal: '"Inter", apple-system, sans-serif',
      mono: '"Fira Code", monospace',
    },
  },
  media: {
    bp1: "(min-width: 415px)",
    dark: "(prefers-color-scheme: dark)",
  },
});

export const darkTheme = createTheme({
  colors: {
    ...slateDark,
    ...blueDark,

    background: "#000",
    backgroundHover: "$slate1",
    accent: "$slate3",
    accentHover: "$slate4",
    border: "$slate6",
    text: "#fff",
    accentText: "$blue11",

    primary: "$blue9",
    primaryHover: "$blue10",

    blueBackground: "$blue1",
    blueBorder: "$blue4",

    header: "rgba(0, 0, 0, 0.66)",
  },
});

export const dimTheme = createTheme({
  colors: {
    ...slateDark,
    ...blueDark,

    background: "$slate1",
    backgroundHover: "$slate2",
    accent: "$slate4",
    accentHover: "$slate5",
    border: "$slate7",
    text: "#fff",
    accentText: "$blue11",

    primary: "$blue9",
    primaryHover: "$blue10",

    blueBackground: "$blue3",
    blueBorder: "$blue6",

    header: "rgba(21, 23, 24, 0.66)",
  },
});

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
  },
  body: {
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
    margin: 0,
    fontFamily: theme.fonts.normal,
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
  },
  __next: {
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
  },
  "__next > div": {
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
  },
  a: {
    fontFamily: theme.fonts.mono,
    fontSize: theme.fontSizes[4],
    textTransform: "uppercase",
    textDecoration: "none",
    color: theme.colors.text,
    letterSpacing: "0.1em",
  },
  h1: {
    fontSize: theme.fontSizes[7],
    fontWeight: "900",
    letterSpacing: "-1.8px",
    marginBlockStart: 0,
    marginBlockEnd: 0,
    width: "100%",
  },
  h2: {
    fontSize: theme.fontSizes[4],
    fontWeight: "400",
    lineHeight: "1.2",
    width: "100%",
  },
  h4: {
    fontSize: theme.fontSizes[3],
    fontWeight: "400",
    fontFamily: "$mono",
    color: theme.colors.accentText,
    textTransform: "uppercase",
    marginBlockStart: 0,
    marginBlockEnd: 0,
    width: "100%",
  },

  "::selection": {
    backgroundColor: theme.colors.primary,
  },
});
