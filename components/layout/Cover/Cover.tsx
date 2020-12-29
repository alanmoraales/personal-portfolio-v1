import { FC } from "react";
import CoverProps from "./CoverProps";
import { Box, Flex } from "@chakra-ui/react";

export const Cover: FC<CoverProps> = ({
  backgroundColor,
  backgroundImgSrc,
  children,
}) => {
  return (
    <Box
      bgImage={`url(${backgroundImgSrc})`}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
    >
      <Flex
        minHeight="100vh"
        justify="center"
        bg={backgroundColor}
        style={{ backdropFilter: "blur(5px)" }}
      >
        {children}
      </Flex>
    </Box>
  );
};
