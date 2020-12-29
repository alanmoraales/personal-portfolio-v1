import { FC } from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Stack,
  Flex,
  Button,
  Heading,
  Image,
  Grid,
  Link as ChakraLink,
  Text,
  Badge,
} from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import path from "path";
import fs from "fs";
import { IndexPage, Project } from "../../data";

const ProjectPage: FC<Project> = ({
  name,
  repositoryURL,
  liveSiteURL,
  fullDescription,
  coverURL,
}) => {
  return (
    <>
      <Box width="100%" height="30vh" maxHeight="300px">
        <Image src={coverURL} width="100%" height="100%" objectFit="cover" />
      </Box>
      <Flex width="100%" justify="center">
        <Stack width="80%" maxWidth="1150px" p="65px 0px" spacing="65px">
          <Stack spacing="30px">
            <Stack spacing="7px">
              <Heading size="lg" pr="15px">
                {name}
              </Heading>
              <Link href="/#projects" passHref>
                <ChakraLink textDecoration="underline">
                  <Stack
                    spacing="5px"
                    align="center"
                    direction="row"
                    width="100%"
                  >
                    <BsArrowLeft />
                    <span>go back</span>
                  </Stack>
                </ChakraLink>
              </Link>
            </Stack>
            <Grid templateColumns="40% 60%" gridGap="10px">
              <div>
                <Button variant="outline" width="100%">
                  repo
                </Button>
              </div>
              <div>
                <Button
                  variant="solid"
                  colorScheme="purple"
                  width="100%"
                  minWidth="0px"
                >
                  see live
                </Button>
              </div>
            </Grid>
          </Stack>
          <Stack spacing="20px">
            <Heading size="sm">Technologies</Heading>
            <Badge width="fit-content">React</Badge>
          </Stack>
          <Stack spacing="20px">
            <Heading size="sm">Description</Heading>
            <Text>{fullDescription}</Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
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
