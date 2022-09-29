import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Pieces from "./components/Pieces";
import Projects from "./components/Projects";
import ServicesMobile from "./components/Services/mobile/Services";
import ServicesDesktop from "./components/Services/desktop/Services";
import Team from "./components/Team";
import Circle from "./svg/Circle";
import { useScroll, motion } from "framer-motion";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [bgColor, setBackgroundColor] = useState("brand.bodyInvert");

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", (e) => {
        setIsDesktop(window.innerWidth >= 1024);
      });
      setIsDesktop(window.innerWidth >= 1024);
    }
  }, []);

  const { scrollYProgress } = useScroll();

  scrollYProgress.onChange((last) => {
    if (!last) {
      return;
    }
    if (last < 0.1) {
      setBackgroundColor("brand.bodyInvert");
      return;
    }
    if (last < 0.25) {
      setBackgroundColor("brand.secondary");
      return;
    }
    if (last < 0.9) {
      setBackgroundColor("brand.body");
      return;
    }
    setBackgroundColor("brand.primary");
    return;
  });

  useEffect(() => {}, []);

  return (
    <Box
      position={"relative"}
      backgroundColor={bgColor}
      transitionDuration={"1s"}
    >
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
      {isDesktop ? (
        <ServicesDesktop></ServicesDesktop>
      ) : (
        <ServicesMobile></ServicesMobile>
      )}

      <Projects></Projects>
      <Contact></Contact>
    </Box>
  );
}
