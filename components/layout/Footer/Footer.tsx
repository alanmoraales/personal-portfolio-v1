import { Stack, Heading, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Stack
      pt="65px"
      pb="150px"
      bg="#202020"
      spacing="65px"
      justify="center"
      color="white"
    >
      <Stack spacing="65px">
        <Stack spacing="10px" textAlign="center">
          <Heading size="sm">social media</Heading>
          <Link
            href="https://github.com/alanmoraales"
            isExternal
            textDecoration="underline"
          >
            github
          </Link>
          <Link
            href="https://twitter.com/alanmoraales_"
            isExternal
            textDecoration="underline"
          >
            twitter
          </Link>
          <Link
            href="https://www.linkedin.com/in/alanmoraales/"
            isExternal
            textDecoration="underline"
          >
            linkedin
          </Link>
        </Stack>
        <Stack spacing="10px" textAlign="center">
          <Heading size="sm">social media</Heading>
          <Link
            href="https://www.instagram.com/alanmoraales"
            isExternal
            textDecoration="underline"
          >
            instagram
          </Link>
          <Link
            href="https://unsplash.com/@alanmoraales"
            isExternal
            textDecoration="underline"
          >
            unsplash
          </Link>
          <Link
            href="https://alanmoraales-web.web.app/"
            isExternal
            textDecoration="underline"
          >
            alanmoraales
          </Link>
        </Stack>
      </Stack>
      <Text textAlign="center">
        Cover photo by{" "}
        <Link
          href="https://unsplash.com/@diesektion?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          isExternal
          textDecoration="underline"
        >
          Robert Anasch
        </Link>{" "}
        in{" "}
        <Link
          href="https://unsplash.com/s/photos/rubiks-cube?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          isExternal
          textDecoration="underline"
        >
          Unsplash
        </Link>
      </Text>
    </Stack>
  );
};
