import { extendTheme } from "@chakra-ui/react";

const defaultTheme = extendTheme({
  colors: {
    purple: {
      500: "#812AD7",
    },
    primary: {
      500: "#812AD7",
      600: "#972eff",
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  components: {
    Button: {
      sizes: {
        lg: {
          padding: "20px 30px",
          height: "auto",
          fontWeight: "500",
        },
      },
      variants: {
        outline: {
          _hover: {
            bg: "primary.500",
          },
          _active: {
            color: "primary.500",
          },
        },
        solid: {
          _hover: {
            bg: "primary.600",
          },
          _active: {
            color: "primary.500",
            bg: "white",
          },
        },
      },
    },
    Heading: {
      sizes: {
        "4xl": {
          fontWeight: "500",
        },
        "3xl": {
          fontWeight: "500",
        },
      },
    },
  },
});

export default defaultTheme;
