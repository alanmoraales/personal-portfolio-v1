import { extendTheme } from "@chakra-ui/react";

const defaultTheme = extendTheme({
  colors: {
    purple: {
      500: "#812AD7",
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
          fontWeight: "inherit",
        },
      },
    },
    Heading: {
      sizes: {
        "4xl": {
          fontWeight: "inherit",
        },
        "3xl": {
          fontWeight: "inherit",
        },
      },
    },
  },
});

export default defaultTheme;
