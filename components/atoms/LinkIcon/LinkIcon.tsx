import { FC } from "react";
import { IconButton } from "@chakra-ui/react";
import LinkIconProps from "./LinkIconProps";

export const LinkIcon: FC<LinkIconProps> = ({ href, ...props }) => {
  return (
    <IconButton
      as="a"
      href={href}
      target="blank"
      fontSize="25px"
      isRound={true}
      bg="none"
      _hover={{
        bg: "none",
        color: "primary.500",
      }}
      _active={{
        bg: "white",
      }}
      {...props}
    />
  );
};
