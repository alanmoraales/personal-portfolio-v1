import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { IndexPage, Project } from "../../data";
import { FC } from "react";

const ProjectPage: FC<Project> = ({ name }) => {
  return <div>{name}</div>;
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dataDirectory = path.join(process.cwd(), "/data/indexPage.json");
  const rawData = fs.readFileSync(dataDirectory);
  // @ts-ignore
  const indexPageProps: IndexPage = JSON.parse(rawData);
  const projects = indexPageProps.projects;
  let paths: any = [];

  projects.forEach((project) => {
    paths.push({ params: { name: project.slug } });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const dataDirectory = path.join(process.cwd(), "/data/indexPage.json");
  const rawData = fs.readFileSync(dataDirectory);
  // @ts-ignore
  const indexPageProps: IndexPage = JSON.parse(rawData);
  const projects = indexPageProps.projects;
  let projectProp: any = {};

  projects.forEach((project) => {
    if (params && project.slug === params.name) {
      projectProp = project;
    }
  });

  return {
    props: {
      ...projectProp,
    },
  };
};
