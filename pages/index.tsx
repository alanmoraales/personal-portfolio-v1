import Head from "next/head";
import {
  Heading,
  Box,
  Flex,
  Text,
  Button,
  Grid,
  useTheme,
} from "@chakra-ui/react";
import { AppBar } from "../components/organisms/Appbar";

const Index = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid templateRows="auto 1fr auto" h="100vh">
        <AppBar title="Home" />
        <Box padding="30px" alignSelf="center" marginTop="-150px">
          <main>
            <Text as="h4" fontSize="2xl" align="center">
              Alan Morales
            </Text>
            {/*@ts-ignore*/}
            <Heading as="h1" size="3xl" align="center">
              Front-End Developer
            </Heading>
            <Flex justify="center" mt="20px">
              <Button
                size="lg"
                bg={theme.colors.primary}
                color="white"
                variant="solid"
                mr="7px"
                _hover={{ bg: theme.colors.primaryLight }}
              >
                See Projects
              </Button>
              <Button
                size="lg"
                colorScheme={theme.colors.primary}
                variant="outline"
              >
                Contact Me
              </Button>
            </Flex>
          </main>
        </Box>
        <Flex
          h="100px"
          bg={theme.colors.primary}
          borderTopRadius="20px"
          padding="30px 0px"
          justify="center"
        >
          <Box w="90%">
            <Heading size="md" color="white">
              $ About Me
            </Heading>
          </Box>
        </Flex>
      </Grid>
    </>
  );
};

export default Index;
