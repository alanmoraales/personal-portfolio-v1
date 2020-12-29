import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Grid,
} from "@chakra-ui/react";
import { If, Then, Else } from "react-if";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { Cover } from "../Cover";
import { LinkIcon } from "../../atoms/LinkIcon";
import { useMediaQuery } from "../../../hooks";
import { HeroProps } from "./HeroProps";
import { FC } from "react";

export const Hero: FC<HeroProps> = ({
  headline,
  subheading,
  github,
  linkedin,
  twitter,
}) => {
  const [useDesktopLayout] = useMediaQuery("(min-width: 1000px)");

  return (
    <Cover
      backgroundColor="rgba(19, 9, 29, 0.9)"
      backgroundImgSrc="/images/cover.webp"
    >
      <If condition={useDesktopLayout}>
        <Then>
          <Grid
            templateColumns="70% 30%"
            color="white"
            w="80%"
            alignItems="center"
            maxWidth="1150px"
          >
            <Box pb="100px" pt="100px" maxWidth="600px">
              <Flex direction="column" pb="50px">
                <Heading size="4xl" pb="20px">
                  {headline}
                </Heading>
                <Text>{subheading}</Text>
              </Flex>
              <Stack direction="column" spacing="15px">
                <Button
                  variant="solid"
                  colorScheme="purple"
                  size="lg"
                  rightIcon={<BsArrowDown />}
                >
                  my projects
                </Button>
                <Button variant="outline" size="lg" borderColor="white">
                  send me a message
                </Button>
              </Stack>
            </Box>
            <Flex
              direction="column"
              align="flex-end"
              justify="flex-start"
              style={{ gap: "30px" }}
            >
              <LinkIcon
                icon={<FaGithub />}
                aria-label="ir a mi github"
                href={github}
                fontSize="35px"
              />
              <LinkIcon
                icon={<FaTwitter />}
                aria-label="ir a mi twitter"
                href={twitter}
                fontSize="35px"
              />
              <LinkIcon
                icon={<FaLinkedinIn />}
                aria-label="ir a mi linkedIn"
                href={linkedin}
                fontSize="35px"
              />
            </Flex>
          </Grid>
        </Then>
        <Else>
          <Flex
            direction="column"
            color="white"
            w="80%"
            justify="space-between"
          >
            <Flex justify="flex-end" pt="50px" style={{ gap: "20px" }}>
              <LinkIcon
                icon={<FaGithub />}
                aria-label="ir a mi github"
                href={github}
              />
              <LinkIcon
                icon={<FaTwitter />}
                aria-label="ir a mi twitter"
                href={twitter}
              />
              <LinkIcon
                icon={<FaLinkedinIn />}
                aria-label="ir a mi linkedIn"
                href={linkedin}
              />
            </Flex>
            <Box pb="150px" pt="70px">
              <Flex direction="column" pb="50px">
                <Heading size="3xl" pb="20px">
                  {headline}
                </Heading>
                <Text>{subheading}</Text>
              </Flex>
              <Stack direction="column" spacing="15px">
                <Button
                  variant="solid"
                  colorScheme="purple"
                  borderRadius="0px"
                  size="lg"
                  rightIcon={<BsArrowDown />}
                >
                  my projects
                </Button>
                <Button variant="outline" borderRadius="0px" size="lg">
                  send me a message
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Else>
      </If>
    </Cover>
  );
};
