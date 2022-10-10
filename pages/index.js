import { Box, useMediaQuery } from "@chakra-ui/react";
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
import { useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  const [pagePosition, setPagePosition] = useState(0);
  const [bgColor, setBgColor] = useState("brand.bodyInvert");

  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", (e) => {
        setWindowWidth(window.innerWidth);
      });
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const { scrollYProgress } = useScroll();

  const paralax = useTransform(scrollYProgress, [0, 1], [0, -500], {
    clamp: false,
  });

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
      {windowWidth && (
        <Pieces
          windowWidth={windowWidth}
          pagePosition={pagePosition}
          isDesktop={isDesktop}
          paralax={paralax}
        ></Pieces>
      )}

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
