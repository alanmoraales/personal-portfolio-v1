import { FC } from "react";
import { ProjectCard } from "../../organisms/ProjectCard";
import { Project } from "../../../data";

export const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </>
  );
};
