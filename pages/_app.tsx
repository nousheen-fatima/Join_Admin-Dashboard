import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Join</title>
        <meta name="viewport" content="width-device-width, initial-scale-1" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="web application that contains problems and video solutions"
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
