import Head from "next/head";
import {
  Heading,
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  Grid,
  useTheme,
  useDisclosure,
  Slide,
} from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { AppBar } from "../components/organisms/Appbar";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>alanmoraales</title>
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
          onClick={onOpen}
          style={{ cursor: "pointer" }}
        >
          <Flex w="90%" justify="space-between">
            <Heading size="md" color="white">
              $ About Me
            </Heading>
            <IconButton onClick={onOpen} aria-label="open about me">
              <TriangleUpIcon boxSize={25} />
            </IconButton>
          </Flex>
        </Flex>
      </Grid>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 1 }}>
        <Box
          bg={theme.colors.primary}
          borderTopRadius="20px"
          padding="30px 0px"
          height="85vh"
        >
          <Flex
            h="100px"
            justify="center"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          >
            <Flex w="90%" justify="space-between">
              <Heading size="md" color="white">
                $ About Me
              </Heading>
              <IconButton onClick={onClose} aria-label="close about me">
                <TriangleDownIcon boxSize={25} />
              </IconButton>
            </Flex>
          </Flex>
        </Box>
      </Slide>
    </>
  );
};

export default Index;
