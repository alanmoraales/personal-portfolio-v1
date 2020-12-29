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
      baseStyle: {
        borderRadius: "0px",
        fontWeight: "500",
        height: "auto",
        width: "auto",
      },
      sizes: {
        lg: {
          padding: "20px 30px",
        },
      },
      variants: {
        outline: {
          borderColor: "gray.900",
          _active: {
            color: "primary.500",
            bg: "white",
          },
          _hover: {
            bg: "primary.600",
            color: "white",
            borderColor: "primary.600",
          },
        },
        solid: {
          _active: {
            color: "primary.500",
            bg: "white",
          },
          _hover: {
            bg: "primary.600",
            color: "white",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "500",
      },
    },
    Link: {
      baseStyle: {
        textDecoration: "underline",
        width: "fit-content",
        _hover: {
          color: "primary.600",
        },
      },
    },
    Badge: {
      baseStyle: {
        padding: "2.5px 10px",
        borderRadius: "0px",
        textTransform: "none",
      },
      variants: {
        subtle: {
          color: "white",
          fontWeight: "500",
        },
      },
    },
  },
});

export default defaultTheme;
