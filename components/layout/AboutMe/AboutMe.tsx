import { Stack, Heading, Box, Text } from "@chakra-ui/react";

export const AboutMe = ({ text }: { text: string }) => {
  return (
    <Stack
      pt="65px"
      pb="65px"
      spacing="65px"
      mt="65px"
      bg="primary.500"
      color="white"
      align="center"
    >
      <Heading size="sm" textAlign="center">
        about me
      </Heading>
      <Box width="80%" maxWidth="500px">
        <Text fontSize="2xl" textAlign="center">
          {text}
        </Text>
      </Box>
    </Stack>
  );
};
