import { FC } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  Stack,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { LinkIcon } from "../../atoms/LinkIcon";
import { Project } from "../../../data";

export const ProjectCard: FC<Project> = ({
  name,
  shortDescription,
  coverURL,
  repositoryURL,
  liveSiteURL,
}) => {
  return (
    <Grid templateColumns="40% 60%">
      <Box>
        <Image src={coverURL} objectFit="cover" w="100%" h="100%" />
      </Box>
      <Stack p="25px 10vw 20px 20px" direction="column" spacing="15px">
        <Heading size="lg">{name}</Heading>
        <Text>{shortDescription}</Text>
        <Flex justify="space-between" align="center">
          <LinkIcon
            icon={<FaGithub />}
            aria-label="ver repository"
            href={repositoryURL}
            fontSize="25px"
          />
          <Link textDecoration="underline">
            <Stack spacing="5px" align="center" direction="row">
              <span>know more</span>
              <BsArrowRight />
            </Stack>
          </Link>
        </Flex>
        <Button
          variant="solid"
          colorScheme="purple"
          as="a"
          href={liveSiteURL}
          target="blank"
          rightIcon={<FiExternalLink />}
        >
          see live
        </Button>
      </Stack>
    </Grid>
  );
};
