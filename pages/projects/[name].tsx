import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Stack,
  Flex,
  Button,
  Heading,
  Image,
  Grid,
  Text,
  Badge,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "../../components/atoms/Link";
import { useMediaQuery } from "../../hooks";
import path from "path";
import fs from "fs";
import { IndexPage, Project } from "../../data";

const ProjectPage: FC<Project> = ({
  name,
  repositoryURL,
  liveSiteURL,
  fullDescription,
  coverURL,
  technologies,
}) => {
  const [useDesktopLayout] = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      <Box width="100%" height="30vh" maxHeight="300px">
        <Image src={coverURL} width="100%" height="100%" objectFit="cover" />
      </Box>
      <Stack width="100%" align="center" pt="25px">
        <Grid
          templateRows={useDesktopLayout ? "none" : "auto 30px auto"}
          templateColumns={useDesktopLayout ? "60% 30px 1fr" : "none"}
          position="sticky"
          top="0px"
          width="80%"
          maxWidth="1150px"
          bg="rgba(255, 255, 255, 0.8)"
          zIndex="5"
          pt="40px"
          pb="30px"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <Stack spacing="7px">
            <Heading size="lg" pr="15px">
              {name}
            </Heading>
            <Link href="/#projects">
              <Stack spacing="5px" align="center" direction="row" width="100%">
                <BsArrowLeft />
                <span>go back</span>
              </Stack>
            </Link>
          </Stack>
          <Spacer />
          <Grid templateColumns="1fr 10px 60%">
            <Button
              variant="outline"
              isFullWidth
              as="a"
              href={repositoryURL}
              target="blank"
              rightIcon={<FaGithub />}
            >
              repo
            </Button>
            <Spacer />
            <Button
              variant="solid"
              colorScheme="purple"
              isFullWidth
              as="a"
              href={liveSiteURL}
              target="blank"
              rightIcon={<FiExternalLink />}
            >
              see live
            </Button>
          </Grid>
        </Grid>
        <Stack width="80%" maxWidth="1150px" pb="65px" pt="35px" spacing="65px">
          <Stack spacing="20px">
            <Heading size="sm">Technologies</Heading>
            <Flex wrap="wrap" style={{ gap: "10px" }}>
              {technologies.map((tec) => (
                <Badge
                  width="fit-content"
                  bg={tec.color ? tec.color : "primary.500"}
                  key={tec.name}
                >
                  {tec.name}
                </Badge>
              ))}
            </Flex>
          </Stack>
          <Stack spacing="20px">
            <Heading size="sm">Description</Heading>
            <Text>{fullDescription}</Text>
          </Stack>
        </Stack>
      </Stack>
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
