import { useState, useEffect } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { motion, useCycle } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { useElementPosition } from "../../../hooks";

const sidebar = ({ x, y }: { x: any; y: any }) => ({
  open: () => ({
    clipPath: `circle(150% at ${x}px ${y}px)`,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  }),
  closed: {
    clipPath: `circle(0px at ${x}px ${y}px)`,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
});

const MotionBox = motion.custom(Box);

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [xCoord, yCoord, size, buttonRef] = useElementPosition();
  const [sidebarVariants, setSidebarVariants] = useState<any>({});

  useEffect(() => {
    setSidebarVariants(
      sidebar({
        x: xCoord + size / 2,
        y: yCoord + size / 2,
      })
    );
  }, [xCoord, yCoord]);

  return (
    <>
      <IconButton
        icon={<AiOutlineMenu />}
        isRound={true}
        fontSize="30px"
        aria-label="open menu"
        padding="15px"
        height="auto"
        color="white"
        bg="primary.500"
        boxShadow="6px 6px 25px 3px rgba(0,0,0,0.22)"
        position="fixed"
        top="100px"
        left="90%"
        transform="translate(-50%, -50%)"
        onClick={() => toggleOpen()}
        ref={buttonRef}
      ></IconButton>
      <MotionBox
        w="100%"
        h="100vh"
        position="fixed"
        zIndex="25"
        bg="primary.500"
        initial="false"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      ></MotionBox>
    </>
  );
};

/*
<Box zIndex="25">
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
        >
          <motion.div className="background" variants={sidebar}>
            <Box
              h="100vh"
              w="100%"
              position="fixed"
              color="white"
              bg="primary.500"
            >
              hola
            </Box>
          </motion.div>
        </motion.nav>
      </Box>
*/
