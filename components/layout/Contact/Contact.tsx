import { Stack, Button, Heading, Text } from "@chakra-ui/react";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../atoms/TextArea";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { LinkIcon } from "../../atoms/LinkIcon";
import { FC } from "react";
import { SocialMediaLinks } from "../../../data";

export const Contact: FC<SocialMediaLinks> = ({
  github,
  linkedin,
  twitter,
}) => {
  return (
    <Stack align="center" p="65px 0px" spacing="40px">
      <Stack width="80%" maxWidth="500px" spacing="5px">
        <Heading size="lg">Alan Morales</Heading>
        <Text color="primary.500">Front-end developer</Text>
        <Stack pt="5px" spacing="15px" direction="row">
          <LinkIcon
            icon={<FaGithub />}
            aria-label="ir a mi github"
            href={github}
          />
          <LinkIcon
            icon={<FaTwitter />}
            aria-label="ir a mi twitter"
            href={twitter}
          />
          <LinkIcon
            icon={<FaLinkedinIn />}
            aria-label="ir a mi linkedIn"
            href={linkedin}
          />
        </Stack>
      </Stack>
      <Stack width="80%" maxWidth="500px">
        <form
          // @ts-ignore
          netlify="true"
          method="post"
          name="contact"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Stack spacing="20px">
            <Heading size="md">Send me a message!</Heading>
            <Input label="name" type="text" isRequired />
            <Input label="email" type="email" isRequired />
            <TextArea label="message" isRequired />
            <Button type="submit" size="lg" colorScheme="purple">
              send
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};
