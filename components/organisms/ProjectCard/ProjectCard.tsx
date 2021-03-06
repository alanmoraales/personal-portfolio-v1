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
import { If, Then, Else } from "react-if";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { LinkIcon } from "../../atoms/LinkIcon";
import { Project } from "../../../data";
import { useMediaQuery } from "../../../hooks";

export const ProjectCard: FC<Project> = ({
  name,
  shortDescription,
  coverURL,
  repositoryURL,
  liveSiteURL,
  slug,
}) => {
  const [useDesktopLayout] = useMediaQuery("(min-width: 1000px)");

  return (
    <Flex justify={useDesktopLayout ? "center" : "left"}>
      <Grid
        templateColumns={useDesktopLayout ? "60% 40%" : "40% 60%"}
        w={useDesktopLayout ? "80%" : "90%"}
        maxWidth="1150px"
      >
        <Box>
          <Image
            src={coverURL}
            objectFit="cover"
            w="100%"
            h="100%"
            alt={`${name} preview image`}
          />
        </Box>
        <Stack p="25px 0px 20px 20px" direction="column" spacing="15px">
          <Heading size="lg">{name}</Heading>
          <Text>{shortDescription}</Text>
          <Flex justify="space-between" align="center">
            <LinkIcon
              icon={<FaGithub />}
              aria-label="see repository"
              href={repositoryURL}
              fontSize="25px"
            />
            <Link href={`/projects/${slug}`}>
              <Stack spacing="5px" align="center" direction="row">
                <span>know more</span>
                <BsArrowRight />
              </Stack>
            </Link>
          </Flex>
          <If condition={liveSiteURL}>
            <Then>
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
            </Then>
            <Else>
              <Button
                variant="solid"
                colorScheme="purple"
                rightIcon={<FiExternalLink />}
                isDisabled
              >
                see live
              </Button>
            </Else>
          </If>
        </Stack>
      </Grid>
    </Flex>
  );
};
