import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(undefined);

  const [pagePosition, setPagePosition] = useState(0);
  const [bgColor, setBgColor] = useState("brand.bodyInvert");

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", (e) => {
        setIsDesktop(window.innerWidth >= 1024);
        setWindowWidth(window.innerWidth);
      });
      setWindowWidth(window.innerWidth);

      setIsDesktop(window.innerWidth >= 1024);
    }
  }, []);

  const { scrollYProgress } = useScroll();

  scrollYProgress.onChange((last) => {
    if (!last || !windowWidth) {
      return;
    }
    if (last < 0.1) {
      setPagePosition(0);
      setBgColor("brand.bodyInvert");
      return;
    }
    if (last < 0.25) {
      setPagePosition(1);
      setBgColor("brand.secondary");
      return;
    }
    if (last < 0.9) {
      setPagePosition(2);
      setBgColor("brand.body");
      return;
    }
    setPagePosition(3);
    setBgColor("brand.primary");
    return;
  });

  if (!windowWidth) return <Box></Box>;

  return (
    <Box
      position={"relative"}
      backgroundColor={bgColor}
      transitionDuration={"1s"}
    >
      <Head>
        <title>Eid Lab</title>
        <meta
          name='description'
          content='Eid Lab est un studio de développement web à Lyon'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Pieces
        windowWidth={windowWidth}
        pagePosition={pagePosition}
        isDesktop={isDesktop}
      ></Pieces>
      <Box position={"relative"}>
        <Header bgColor={bgColor} pagePosition={pagePosition}></Header>
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
    </Box>
  );
}
