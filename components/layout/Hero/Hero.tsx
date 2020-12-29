import { Box, Flex, Heading, Text, Stack, Button } from "@chakra-ui/react";
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
      <Flex
        color="white"
        w="80%"
        direction={useDesktopLayout ? "row-reverse" : "column"}
        justify="space-between"
        align={useDesktopLayout ? "center" : "none"}
      >
        <Flex
          justify="flex-end"
          pt={useDesktopLayout ? "0px" : "50px"}
          style={{ gap: "20px" }}
          direction={useDesktopLayout ? "column" : "row"}
        >
          <LinkIcon
            icon={<FaGithub />}
            aria-label="ir a mi github"
            href={github}
            fontSize={useDesktopLayout ? "35px" : "25px"}
          />
          <LinkIcon
            icon={<FaTwitter />}
            aria-label="ir a mi twitter"
            href={twitter}
            fontSize={useDesktopLayout ? "35px" : "25px"}
          />
          <LinkIcon
            icon={<FaLinkedinIn />}
            aria-label="ir a mi linkedIn"
            href={linkedin}
            fontSize={useDesktopLayout ? "35px" : "25px"}
          />
        </Flex>
        <Box
          pb={useDesktopLayout ? "0px" : "150px"}
          pt={useDesktopLayout ? "0px" : "70px"}
          maxWidth={useDesktopLayout ? "500px" : "100%"}
        >
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
      </Flex>
    </Cover>
  );
};
