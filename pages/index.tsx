import { GetStaticProps } from "next";
import { Flex, Box, Heading, Stack, Text } from "@chakra-ui/react";
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
        <section id="about me">
          <Stack
            pt="65px"
            pb="65px"
            spacing="65px"
            mt="65px"
            bg="primary.500"
            color="white"
            align="center"
          >
            <Heading size="sm" textAlign="center">
              about me
            </Heading>
            <Box width="80%" maxWidth="500px">
              <Text fontSize="2xl" textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat varius interdum neque, sit fermentum interdum feugiat.
                Mattis suspendisse tellus lobortis eleifend bibendum quisque
                odio malesuada. Bibendum risus, odio scelerisque odio viverra.
                Ornare volutpat posuere cursus diam at elit.
              </Text>
            </Box>
          </Stack>
        </section>
        <Box h="30vh" />
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
