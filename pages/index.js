import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
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
import { useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [realWindowWidth, setRealWindowWidth] = useState(undefined);

  const [pagePosition, setPagePosition] = useState(0);
  const [bgColor, setBgColor] = useState("brand.bodyInvert");

  const [isDesktop] = useMediaQuery("(min-width: 1024px)");
  const [pagePositionPercentages, setPagePositionPercentages] =
    useState(undefined);

  const [piecesTagets, setPiecesTargets] = useState([
    useRef(),
    useRef(),
    useRef(),
  ]);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", (e) => {
        setRealWindowWidth(window.innerWidth);
        setWindowWidth(window.innerWidth >= 1680 ? 1680 : window.innerWidth);
      });
      setRealWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth >= 1680 ? 1680 : window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (!window) return;
    setPagePositionPercentages([
      realWindowWidth > 2000 ? 0.12 : 0.1,
      realWindowWidth > 2000 ? 0.35 : 0.25,
      0.9,
    ]);
  }, [realWindowWidth]);

  const { scrollYProgress } = useScroll();

  const paralax = useTransform(scrollYProgress, [0, 1], [0, -500], {
    clamp: false,
  });

  scrollYProgress.onChange((last) => {
    if (!last || !windowWidth || !pagePositionPercentages) {
      return;
    }
    if (last < pagePositionPercentages[0]) {
      setPagePosition(0);
      setBgColor("brand.bodyInvert");
      return;
    }
    if (last < pagePositionPercentages[1]) {
      setPagePosition(1);
      setBgColor("brand.secondary");
      return;
    }
    if (last < pagePositionPercentages[2]) {
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
      overflow={"hidden"}
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
          realWindowWidth={realWindowWidth}
          pagePosition={pagePosition}
          isDesktop={isDesktop}
          paralax={paralax}
        ></Pieces>
      )}

      <Flex direction={"column"} alignItems={"center"} position={"relative"}>
        <Header bgColor={bgColor} pagePosition={pagePosition}></Header>
        <Intro></Intro>
        <Team
          pagePosition={pagePosition}
          isDesktop={isDesktop}
          piecesTagets={piecesTagets}
          setPiecesTargets={setPiecesTargets}
        ></Team>
        {isDesktop ? (
          <ServicesDesktop></ServicesDesktop>
        ) : (
          <ServicesMobile></ServicesMobile>
        )}

        <Projects></Projects>
        <Contact></Contact>
      </Flex>
    </Box>
  );
}
