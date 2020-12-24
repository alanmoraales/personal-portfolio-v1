import Head from "next/head";
import Image from "next/image";
import { Box, Flex, Heading, Text, Stack, Button } from "@chakra-ui/react";
// #812AD7
const Index = () => {
  return (
    <>
      <Head>
        <title>dev portfolio | alanmoraales</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="hero">
          <Flex w="100%" minHeight="100vh" h="100%" justify="center">
            <Box w="100%" h="100%" position="absolute" zIndex="-2">
              <Image src="/images/cover.jpg" layout="fill" objectFit="cover" />
            </Box>
            <Box
              w="100%"
              h="100%"
              bg="rgba(19, 9, 29, 0.9)"
              position="absolute"
              style={{ backdropFilter: "blur(5px)" }}
              zIndex="-1"
            ></Box>
            <Flex
              direction="column"
              color="white"
              w="90%"
              justify="space-between"
            >
              <Flex justify="flex-end" pt="50px">
                <div>social icons</div>
              </Flex>
              <Box pb="120px" pt="70px">
                <Flex direction="column" pb="50px">
                  <Heading size="4xl" pb="20px">
                    I'm a front-end developer
                  </Heading>
                  <Text fontSize="xl">
                    here I am going to write something short about me, blah,
                    blah
                  </Text>
                </Flex>
                <Stack direction="column" spacing="10px">
                  <Button
                    variant="solid"
                    colorScheme="purple"
                    borderRadius="0px"
                  >
                    my projects
                  </Button>
                  <Button variant="outline" borderRadius="0px">
                    send me a message
                  </Button>
                </Stack>
              </Box>
            </Flex>
          </Flex>
        </section>
      </main>
    </>
  );
};

export default Index;
