import Head from "next/head";
import { CrumpledPaperIcon } from "@radix-ui/react-icons";

import { styled, theme } from "../stitches.config";
import Layout from "../components/Layout";
import FixedButton from "../components/FixedButton";
import SnapScrollContainer from "../components/SnapScrollContainer";

import type { ReactElement } from "react";

const Home = () => {
  return (
    <HomePageContainer>
      <Head>
        <title>zolly</title>
        <meta name="description" content="Cameron Zollinger's portfolio" />
        <meta
          name="theme-color"
          content="#FFFFFF"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      <SnapScrollContainer>
        <Section>
          <h4>Hi 👋 my name is</h4>
          <h1>Cameron Zollinger</h1>
          <h2>
            I&apos;m a<AccentText> Software Test Engineer </AccentText>
            with a passion for quality software. Currently at
            <a href="https://awardco.com" target="_blank" rel="noreferrer">
              <AccentText
                css={{
                  fontFamily: "Inter",
                  textTransform: "none",
                  letterSpacing: "0",
                  "&:hover": {
                    color: "$primaryHover",
                  },
                }}
              >
                {" "}
                Awardco{" "}
              </AccentText>
            </a>
            pushing the bounds of software quality and automation testing
          </h2>
        </Section>
        <Section>
          <h1>
            What are you waiting for? <br /> Check out my work!
          </h1>
        </Section>
      </SnapScrollContainer>

      <FixedButton
        text="see my work"
        icon={
          <CrumpledPaperIcon
            style={{ width: "16px", height: "16px" }}
            color="white"
          />
        }
        link="/work"
      />
    </HomePageContainer>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const HomePageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
});

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  paddingLeft: "32px",
  paddingRight: "32px",
  scrollSnapAlign: "start",
  textAlign: "center",
  alignItems: "center",
  borderBottom: "solid 1px $border",

  h2: {
    lineHeight: "1.5",
  },

  "@bp1": {
    h1: {
      fontSize: "64px",
      letterSpacing: "-4px",
    },

    h2: {
      width: "40vw",
    },
  },
});

const AccentText = styled("span", {
  color: "$accentText",
});
