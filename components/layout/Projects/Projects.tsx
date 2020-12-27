import { FC } from "react";
import { Stack } from "@chakra-ui/react";
import { ProjectCard } from "../../organisms/ProjectCard";
import { Project } from "../../../data";

export const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Stack spacing="30px">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </Stack>
  );
};
