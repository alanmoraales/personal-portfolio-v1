import { FC } from "react";
import { Stack, Heading, Box } from "@chakra-ui/react";
import { ProjectCard } from "../../organisms/ProjectCard";
import { Project } from "../../../data";

export const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      <Box pt="65px" pb="65px">
        <Heading size="sm" textAlign="center">
          projects
        </Heading>
      </Box>
      <Stack spacing="30px">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Stack>
    </>
  );
};
