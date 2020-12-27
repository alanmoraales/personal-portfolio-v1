import { Box, Flex } from "@chakra-ui/react";
import { Hero } from "../components/layout/Hero";
import { Menu } from "../components/organisms/Menu";

const Index = () => {
  return (
    <>
      <Menu />
      <Flex direction="column">
        <section id="hero">
          <Hero />
        </section>
        <main>
          <section id="projects">
            <Box h="100vh">projects</Box>
          </section>
        </main>
      </Flex>
    </>
  );
};

export default Index;
