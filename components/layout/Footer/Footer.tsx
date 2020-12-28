import { Stack, Heading, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { SocialMediaLinks } from "../../../data";

export const Footer: FC<SocialMediaLinks> = ({
  github,
  twitter,
  linkedin,
  instagram,
  unsplash,
  alanmoraales,
}) => {
  return (
    <Stack
      pt="65px"
      pb="150px"
      bg="#202020"
      spacing="65px"
      justify="center"
      align="center"
      color="white"
    >
      <Stack spacing="65px" align="center">
        <Stack spacing="10px" textAlign="center" width="fit-content">
          <Heading size="sm">social media</Heading>
          <Link href={github} isExternal textDecoration="underline">
            github
          </Link>
          <Link href={twitter} isExternal textDecoration="underline">
            twitter
          </Link>
          <Link href={linkedin} isExternal textDecoration="underline">
            linkedin
          </Link>
        </Stack>
        <Stack spacing="10px" textAlign="center" width="fit-content">
          <Heading size="sm">my photography</Heading>
          <Link href={instagram} isExternal textDecoration="underline">
            instagram
          </Link>
          <Link href={unsplash} isExternal textDecoration="underline">
            unsplash
          </Link>
          <Link href={alanmoraales} isExternal textDecoration="underline">
            alanmoraales
          </Link>
        </Stack>
      </Stack>
      <Text textAlign="center" width="80%">
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
