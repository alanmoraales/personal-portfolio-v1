import { GetStaticProps } from "next";
import { Flex } from "@chakra-ui/react";
import { Menu } from "../components/organisms/Menu";
import { Hero } from "../components/layout/Hero";
import { Projects } from "../components/layout/Projects";
import { Footer } from "../components/layout/Footer";
import { AboutMe } from "../components/layout/AboutMe";
import { Contact } from "../components/layout/Contact";
import { Project } from "../data";
import path from "path";
import fs from "fs";

const Index = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <Menu />
      <Flex direction="column">
        <section id="hero">
          <Hero />
        </section>
        <main>
          <section id="projects">
            <Projects projects={projects} />
          </section>
        </main>
        <section id="about me">
          <AboutMe />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <footer>
          <Footer />
        </footer>
      </Flex>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const projectsDirectory = path.join(process.cwd(), "/data/projects.json");
  const rawProjectsData = fs.readFileSync(projectsDirectory);
  // @ts-ignore
  const projects = JSON.parse(rawProjectsData);

  return {
    props: {
      projects,
    },
  };
};
