import Head from "next/head";
import Image from "next/image";

import { styled, theme } from "../stitches.config";
import Layout from "../components/Layout";
import FixedButton from "../components/FixedButton";

import { Folder } from "phosphor-react";

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
            I&apos;m a
            <span style={{ color: "#0091FF" }}> Software QA Engineer </span>
            with a passion for quality software
          </h2>
          <h2>
            Currently at
            <a href="https://awardco.com" target="_blank" rel="noreferrer">
              <span
                style={{
                  color: "#0091FF",
                  fontFamily: "Inter",
                  textTransform: "none",
                  letterSpacing: "0",
                }}
              >
                {" "}
                Awardco{" "}
              </span>
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
        icon={<Folder size="24" color="white" />}
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
});

const SnapScrollContainer = styled("div", {
  maxHeight: "100vh",
  overflowY: "scroll",
  scrollSnapType: "y mandatory",
});

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  paddingLeft: "32px",
  paddingRight: "32px",
  scrollSnapAlign: "start",

  "@bp1": {},
});
