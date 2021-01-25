import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MenuItemLink } from "../../atoms/MenuItemLink";

export const Menu = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        isRound={true}
        fontSize="25px"
        aria-label="open menu"
        size="lg"
        color="white"
        bg="primary.500"
        boxShadow="6px 6px 25px 3px rgba(0,0,0,0.22)"
        position="fixed"
        top="90%"
        left="90%"
        zIndex={5000}
        transform="translate(-100%, -50%)"
        onClick={onToggle}
      ></IconButton>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerOverlay>
          <DrawerContent bg="primary.500">
            <DrawerBody>
              <Flex justify="center" h="100%">
                <Stack
                  w="80%"
                  spacing="10px"
                  justify="center"
                  pt="20%"
                  gap="10px"
                  color="white"
                >
                  <MenuItemLink href="/#projects" onClick={onClose}>
                    projects
                  </MenuItemLink>
                  <MenuItemLink href="/#contact" onClick={onClose}>
                    contact
                  </MenuItemLink>
                  <MenuItemLink href="/#about" onClick={onClose}>
                    about me
                  </MenuItemLink>
                </Stack>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
