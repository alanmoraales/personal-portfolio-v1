import React, { FC } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import AppBarProps from "./AppBarProps";

export const AppBar: FC<AppBarProps> = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>MY MENU</DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Flex justify="center" h="70px" zIndex="1" position="sticky" top="0px">
        <Flex justify="space-between" w="90%" alignItems="center">
          <IconButton aria-label="open navigation" onClick={onOpen}>
            <HamburgerIcon w="25px" h="25px" />
          </IconButton>
          <Text>{title}</Text>
        </Flex>
      </Flex>
    </>
  );
};
