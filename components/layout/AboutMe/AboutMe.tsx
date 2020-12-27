import { Stack, Heading, Box, Text } from "@chakra-ui/react";

export const AboutMe = () => {
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          varius interdum neque, sit fermentum interdum feugiat. Mattis
          suspendisse tellus lobortis eleifend bibendum quisque odio malesuada.
          Bibendum risus, odio scelerisque odio viverra. Ornare volutpat posuere
          cursus diam at elit.
        </Text>
      </Box>
    </Stack>
  );
};
