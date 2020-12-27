import { GetStaticProps } from "next";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { Menu } from "../components/organisms/Menu";
import { Hero } from "../components/layout/Hero";
import { Projects } from "../components/layout/Projects";
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
            <Box pt="65px" pb="65px">
              <Heading size="sm" textAlign="center">
                projects
              </Heading>
            </Box>
            <Projects projects={projects} />
          </section>
        </main>
        <Box h="100vh" />
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
