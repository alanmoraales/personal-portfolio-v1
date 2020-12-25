import Head from "next/head";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import defaultTheme from "../themes/defaultTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>alanmoraales / dev</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <ChakraProvider resetCSS={true} theme={defaultTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
