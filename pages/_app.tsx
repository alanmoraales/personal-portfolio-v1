import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import defaultTheme from "../themes/defaultTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={defaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
