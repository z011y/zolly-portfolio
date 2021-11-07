import { createStitches } from "@stitches/react";

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
      primary: "#0091FF",
      border: "#CEE7FE",
      accent: "#EDF6FF",
      background: "#FFF",
      text: "#000",
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
    primary: "#0091FF",
    border: "#2E2E2E",
    accent: "#232323",
    background: "#000",
    text: "#FFF",
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
  },
  h2: {
    fontSize: theme.fontSizes[4],
    fontWeight: "400",
    lineHeight: "1.2",
  },
  h4: {
    fontSize: theme.fontSizes[3],
    fontWeight: "400",
    fontFamily: "$mono",
    color: theme.colors.primary,
    textTransform: "uppercase",
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },

  "::selection": {
    backgroundColor: theme.colors.primary,
  },
});
