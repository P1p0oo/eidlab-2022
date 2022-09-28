import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Pieces from "./components/Pieces";
import Team from "./components/Team";

export default function Home() {
  return (
    <Box position={"relative"}>
      <Pieces></Pieces>
      <Head>
        <title>Eid Lab</title>
        <meta
          name='description'
          content='Eid Lab est un studio de développement web à Lyon'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header></Header>
      <Intro></Intro>
      <Team></Team>
    </Box>
  );
}
