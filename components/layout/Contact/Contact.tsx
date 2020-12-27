import { Stack, Button, Heading, Text } from "@chakra-ui/react";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../atoms/TextArea";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { LinkIcon } from "../../atoms/LinkIcon";

export const Contact = () => {
  return (
    <Stack align="center" p="65px 0px" spacing="40px">
      <Stack width="80%" maxWidth="500px" spacing="5px">
        <Heading size="lg">Alan Morales</Heading>
        <Text color="primary.500">Front-end developer</Text>
        <Stack pt="5px" spacing="15px" direction="row">
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
        </Stack>
      </Stack>
      <Stack width="80%" maxWidth="500px">
        <form action="">
          <Stack spacing="20px">
            <Heading size="md">Send me a message!</Heading>
            <Input label="name" type="text" />
            <Input label="email" type="email" />
            <TextArea label="message" />
            <Button type="submit" size="lg" colorScheme="purple">
              send
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};
