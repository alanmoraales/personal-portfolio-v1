import { GetStaticProps } from "next";
import { Box, Flex } from "@chakra-ui/react";
import { Hero } from "../components/layout/Hero";
import { Menu } from "../components/organisms/Menu";
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
            <Flex direction="column">
              {projects.map((project) => (
                <Box key={project.name}>{project.name}</Box>
              ))}
            </Flex>
          </section>
        </main>
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
