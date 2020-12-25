import Head from "next/head";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { Cover } from "../components/layout/Cover";
import { LinkIcon } from "../components/atoms/LinkIcon";

const Index = () => {
  return (
    <>
      <Head>
        <title>alanmoraales / dev</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <section id="hero">
          <Cover
            backgroundColor="rgba(19, 9, 29, 0.9)"
            backgroundImgSrc="/images/cover.jpg"
          >
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
                  href="https://github.com/alanmoraales"
                />
                <LinkIcon
                  icon={<FaTwitter />}
                  aria-label="ir a mi twitter"
                  href="https://twitter.com/alanmoraales_"
                />
                <LinkIcon
                  icon={<FaLinkedinIn />}
                  aria-label="ir a mi linkedIn"
                  href="https://www.linkedin.com/in/alanmoraales/"
                />
              </Flex>
              <Box pb="150px" pt="70px">
                <Flex direction="column" pb="50px">
                  <Heading size="3xl" pb="20px">
                    I'm a front-end developer
                  </Heading>
                  <Text>
                    here I am going to write something short about me, blah,
                    blah
                  </Text>
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
          </Cover>
        </section>
      </main>
    </>
  );
};

export default Index;
