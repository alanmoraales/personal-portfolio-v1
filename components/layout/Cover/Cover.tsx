import { FC } from "react";
import CoverProps from "./CoverProps";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";

export const Cover: FC<CoverProps> = ({
  backgroundColor,
  backgroundImgSrc,
  children,
}) => {
  return (
    <Flex w="100%" minHeight="100vh" h="100%" justify="center">
      <Box w="100%" h="100%" position="absolute" zIndex="-2">
        <Image src={backgroundImgSrc} layout="fill" objectFit="cover" />
      </Box>
      <Box
        w="100%"
        h="100%"
        bg={backgroundColor}
        position="absolute"
        style={{ backdropFilter: "blur(5px)" }}
        zIndex="-1"
      ></Box>
      {children}
    </Flex>
  );
};
