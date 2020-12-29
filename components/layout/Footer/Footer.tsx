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
        <Stack spacing="10px" align="center" width="fit-content">
          <Heading size="sm">social media</Heading>
          <Link href={github} isExternal>
            github
          </Link>
          <Link href={twitter} isExternal>
            twitter
          </Link>
          <Link href={linkedin} isExternal>
            linkedin
          </Link>
        </Stack>
        <Stack spacing="10px" width="fit-content" align="center">
          <Heading size="sm">my photography</Heading>
          <Link href={instagram} isExternal>
            instagram
          </Link>
          <Link href={unsplash} isExternal>
            unsplash
          </Link>
          <Link href={alanmoraales} isExternal>
            alanmoraales
          </Link>
        </Stack>
      </Stack>
      <Text textAlign="center" width="80%">
        Cover photo by{" "}
        <Link
          href="https://unsplash.com/@diesektion?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          isExternal
        >
          Robert Anasch
        </Link>{" "}
        in{" "}
        <Link
          href="https://unsplash.com/s/photos/rubiks-cube?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          isExternal
        >
          Unsplash
        </Link>
      </Text>
    </Stack>
  );
};
