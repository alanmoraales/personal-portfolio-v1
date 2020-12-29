import { GetStaticProps } from "next";
import { Flex } from "@chakra-ui/react";
import { Menu } from "../components/organisms/Menu";
import { Hero } from "../components/layout/Hero";
import { Projects } from "../components/layout/Projects";
import { Footer } from "../components/layout/Footer";
import { AboutMe } from "../components/layout/AboutMe";
import { Contact } from "../components/layout/Contact";
import { IndexPage } from "../data";
import path from "path";
import fs from "fs";

const Index = ({
  headline,
  subheading,
  aboutMe,
  projects,
  socialMedia,
}: IndexPage) => {
  return (
    <>
      <Flex direction="column">
        <section id="hero">
          <Hero headline={headline} subheading={subheading} {...socialMedia} />
        </section>
        <main>
          <section id="projects">
            <Projects projects={projects} />
          </section>
        </main>
        <section id="about me">
          <AboutMe text={aboutMe} />
        </section>
        <section id="contact">
          <Contact {...socialMedia} />
        </section>
        <footer>
          <Footer {...socialMedia} />
        </footer>
      </Flex>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), "/data/indexPage.json");
  const rawData = fs.readFileSync(dataDirectory);
  // @ts-ignore
  const indexPageProps = JSON.parse(rawData);

  return {
    props: indexPageProps,
  };
};
