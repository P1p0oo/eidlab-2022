import { Box, Container, Flex } from "@chakra-ui/react";
import Arc from "./svg/Arc";
import Circle from "./svg/Circle";
import HalfCircle from "./svg/HalfCircle";
import TinyArc from "./svg/TinyArc";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Pieces = ({
  windowWidth,
  realWindowWidth,
  pagePosition,
  isDesktop,
  parallax,
  piecesTargeted,
  invertParallax,
}) => {
  const [bodyHeight, setBodyHeight] = useState(undefined);

  const [scaling, setScaling] = useState(1.0);

  const refContainer = useRef(null);
  const refPieces = useRef(null);

  // Moving pieces useState initialization

  const [circle1, setCircle1] = useState({
    position: {},
    fill: "",
  });
  const [halfCircle1, setHalfCircle1] = useState({
    position: {},
    fill: "",
  });
  const [halfCircle2, setHalfCircle2] = useState({
    position: {},
    fill: "",
  });
  const [tinyArc1, setTinyArc1] = useState({
    position: {},
    fill: "",
    delay: "",
  });
  const [mathias, setMathias] = useState({
    position: {},
    delay: "",
  });
  const [ludovic, setLudovic] = useState({
    position: {},
    delay: "",
  });
  const [circle2, setCircle2] = useState({
    position: {},
    fill: "",
  });
  const [arc1, setArc1] = useState({
    position: {},
    fill: "",
  });

  // Moving pieces default position configuration

  useEffect(() => {
    if (!refContainer.current) return;
    setBodyHeight(refContainer.current.clientHeight);
    if (!bodyHeight || !windowWidth) return;
    setCircle1({
      position: {
        x: windowWidth - 160,
        y: 539,
        scale: 1,
      },
      fill: "brand.primary",
    });
    setHalfCircle1({
      position: {
        x: windowWidth - 100,
        y: 120,
        scale: 1,
        rotate: 0,
        opacity: 1,
      },
      fill: "brand.primary",
    });
    setHalfCircle2({
      position: {
        x: windowWidth - 134,
        y: 225,
        scale: 1,
        rotate: -90,
        opacity: 0,
      },
    });
    setTinyArc1({
      position: {
        x: 80,
        y: 1185,
        scale: 0.8,
        rotate: -60,
        opacity: 0,
      },
      fill: "brand.primary",
      delay: 0,
    });
    setMathias({
      position: {
        x: windowWidth,
        y: windowWidth >= 992 ? 1350 : 1300,
        scale: 0.8,
        opacity: 0,
      },
    });
    setLudovic({
      position: {
        x: 0,
        y: 1530,
        scale: 0.8,
        opacity: 1,
      },
    });
    setCircle2({
      position: {
        x: windowWidth - 120,
        y:
          windowWidth >= 992
            ? bodyHeight - 1500
            : windowWidth >= 768
            ? bodyHeight - 1650
            : bodyHeight - 1000,
        scale: 0.4,
      },
      fill: "brand.secondary",
    });

    setArc1({
      position: {
        x: 0,
        y:
          windowWidth >= 992
            ? bodyHeight - 1200
            : windowWidth >= 768
            ? bodyHeight - 1530
            : bodyHeight - 1070,
        scale: 1.2,
      },
      fill: "brand.secondary",
    });
  }, [bodyHeight, windowWidth, refContainer]);

  // Moving pieces breakpoint configuration

  useEffect(() => {
    setScaling(isDesktop ? 1.5 : 1);
    switch (pagePosition) {
      case 0:
        setCircle1({
          position: {
            x: windowWidth - 160,
            y: 539,
            scale: 1,
          },
          fill: "brand.primary",
        });
        setHalfCircle1({
          position: {
            x: windowWidth - 100,
            y: 120,
            scale: 1,
            rotate: 0,
            opacity: 1,
          },
          fill: "brand.primary",
        });
        setHalfCircle2({
          position: {
            x: windowWidth - 100,
            y: 120,
            scale: 1,
            rotate: -90,
            opacity: 0,
          },
        });
        setTinyArc1({
          position: {
            x:
              piecesTargeted && piecesTargeted[0]
                ? piecesTargeted[0].offsetLeft + 10
                : 0,
            y:
              piecesTargeted && piecesTargeted[0] && refPieces
                ? windowWidth >= 992
                  ? piecesTargeted[0].offsetTop + 120
                  : piecesTargeted[0].offsetTop + 100
                : 0,
            scale: 0.8,
            rotate: -60,
            opacity: 0,
          },
          fill: "brand.primary",
          delay: 0,
        });
        setMathias({
          position: {
            x: windowWidth,
            y:
              piecesTargeted && piecesTargeted[1] && refPieces
                ? piecesTargeted[1].offsetTop
                : 0,
            scale: 0.8,
            opacity: 0,
          },
          delay: 0,
        });
        setLudovic({
          position: {
            x: -200,
            y:
              piecesTargeted && piecesTargeted[2] && refPieces
                ? piecesTargeted[2].offsetTop
                : 0,
            scale: 0.8,
            opacity: 0,
          },
          delay: 0,
        });
        break;
      case 1:
        setCircle1({
          position: {
            x: windowWidth - 15,
            y: 1500,
            scale: 2,
          },
          fill: "brand.highlight",
        });
        setHalfCircle1({
          position: {
            x:
              piecesTargeted && piecesTargeted[0]
                ? piecesTargeted[0].offsetLeft
                : 0,
            y:
              piecesTargeted && piecesTargeted[0] && refPieces
                ? piecesTargeted[0].offsetTop
                : 0,

            scale: 1,
            rotate: 100,
            opacity: 0,
          },
          fill: "brand.primary",
        });
        setHalfCircle2({
          position: {
            x:
              piecesTargeted && piecesTargeted[0]
                ? piecesTargeted[0].offsetLeft
                : 0,
            y:
              piecesTargeted && piecesTargeted[0] && refPieces
                ? piecesTargeted[0].offsetTop
                : 0,
            scale: 1,
            rotate: 10,
            opacity: 1,
          },
        });
        setTinyArc1({
          position: {
            // x: realWindowWidth > 2000 ? 251 : windowWidth >= 992 ? 233 : 33,
            // y: realWindowWidth > 2000 ? 1767 : windowWidth >= 992 ? 1295 : 1195,
            x:
              piecesTargeted && piecesTargeted[0]
                ? piecesTargeted[0].offsetLeft + 30
                : 0,
            y:
              piecesTargeted && piecesTargeted[0] && refPieces
                ? windowWidth >= 992
                  ? piecesTargeted[0].offsetTop + 140
                  : piecesTargeted[0].offsetTop + 120
                : 0,
            scale: 0.8,
            rotate: 0,
            opacity: 1,
          },
          fill: "brand.primary",
          delay: 1,
        });
        setMathias({
          position: {
            // x:
            //   realWindowWidth > 2000
            //     ? windowWidth - 418
            //     : windowWidth >= 992
            //     ? windowWidth - 420
            //     : windowWidth - 190,
            // y: realWindowWidth > 2000 ? 1990 : windowWidth >= 992 ? 1330 : 1300,
            x:
              piecesTargeted && piecesTargeted[1]
                ? piecesTargeted[1].offsetLeft
                : 0,
            y:
              piecesTargeted && piecesTargeted[1] && refPieces
                ? piecesTargeted[1].offsetTop
                : 0,
            scale: 0.8,
            opacity: 1,
          },
          delay: 0.25,
        });
        setLudovic({
          position: {
            // x: realWindowWidth > 2000 ? 228 : windowWidth >= 992 ? 210 : 10,
            // y: realWindowWidth > 2000 ? 2320 : windowWidth >= 992 ? 1510 : 1530,
            x:
              piecesTargeted && piecesTargeted[2]
                ? piecesTargeted[2].offsetLeft
                : 0,
            y:
              piecesTargeted && piecesTargeted[2] && refPieces
                ? piecesTargeted[2].offsetTop
                : 0,
            scale: 0.8,
            opacity: 1,
          },
          delay: 0.5,
        });
        break;
      case 2:
        setCircle1({
          position: {
            x: windowWidth >= 992 ? windowWidth - 250 : windowWidth - 80,
            y: realWindowWidth > 2000 ? 2800 : windowWidth >= 992 ? 1870 : 1849,
            scale: 1.8,
          },
          fill: "brand.tertiary",
        });
        setHalfCircle2({
          position: {
            x: -200,
            y: windowWidth >= 992 ? 1178 : 1088,
            scale: 1,
            rotate: 10,
            opacity: 0,
          },
        });
        setTinyArc1({
          position: {
            x: -200,
            y: windowWidth >= 992 ? 1295 : 1195,
            scale: 0.8,
            rotate: 0,
            opacity: 0,
          },
          fill: "brand.primary",
          delay: 0,
        });
        setMathias({
          position: {
            x: windowWidth,
            y: realWindowWidth > 2000 ? 1990 : windowWidth >= 992 ? 1330 : 1300,
            scale: 0.8,
            opacity: 0,
          },
          delay: 0,
        });
        setLudovic({
          position: {
            x: -200,
            y: realWindowWidth > 2000 ? 2320 : windowWidth >= 992 ? 1510 : 1530,
            scale: 0.8,
            opacity: 0,
          },
          delay: 0,
        });
        setCircle2({
          position: {
            x: windowWidth - 120,
            y:
              windowWidth >= 992
                ? bodyHeight - 1500
                : windowWidth >= 768
                ? bodyHeight - 1650
                : bodyHeight - 1000,
            scale: 0.4,
          },
          fill: "brand.secondary",
        });
        setArc1({
          position: {
            x: 0,
            y:
              windowWidth >= 992
                ? bodyHeight - 1200
                : windowWidth >= 768
                ? bodyHeight - 1530
                : bodyHeight - 1070,
            scale: 1.2,
          },
          fill: "brand.secondary",
        });
        break;
      case 3:
        setCircle2({
          position: {
            x: windowWidth - 150,
            y: bodyHeight + 365,
            scale: 1.2,
          },
          fill: "brand.secondary",
        });
        setArc1({
          position: {
            x: 0,
            y: bodyHeight + 280,
            scale: 1.2,
          },
          fill: "brand.tertiary",
        });
        break;
      default:
        break;
    }
  }, [
    pagePosition,
    windowWidth,
    bodyHeight,
    isDesktop,
    realWindowWidth,
    piecesTargeted,
    refPieces,
  ]);

  return (
    <Flex justifyContent={"center"}>
      <Container
        maxW={"container.xxl"}
        position={"absolute"}
        zIndex={0}
        width={"100%"}
        height={"100%"}
        ref={refContainer}
      >
        <motion.div style={{ y: parallax }} ref={refPieces}>
          {!bodyHeight ? (
            ""
          ) : (
            <motion.div
              initial={{ transform: "scale(2)", opacity: 0 }}
              animate={{ transform: "scale(1)", opacity: 1 }}
              exit={{ transform: "scale(2)", opacity: 0 }}
              transition={{ type: "spring", delay: 0.5, duration: 4 }}
            >
              <Circle
                position={"absolute"}
                width={"160px"}
                height={"160px"}
                top={"120.16px"}
                left={{ base: "-80.66px", lg: "100px" }}
                fill={"brand.secondary"}
                transform={`scale(${scaling})`}
              ></Circle>
              <motion.div
                style={{ position: "absolute" }}
                animate={tinyArc1.position}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  duration: 0.5,
                  delay: tinyArc1.delay,
                }}
              >
                <motion.div
                  style={{
                    y: invertParallax,
                  }}
                >
                  <TinyArc
                    fill={"brand.primary"}
                    transform={`scale(${scaling})`}
                    position={"absolute"}
                    width={"101px"}
                    height={"69px"}
                  ></TinyArc>
                </motion.div>
              </motion.div>
              <motion.div
                style={{ position: "absolute", width: "150px" }}
                animate={{
                  x: halfCircle1.position.x,
                  y: halfCircle1.position.y,
                  scale: halfCircle1.position.scale,
                  opacity: halfCircle1.position.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  duration: 0.5,
                }}
              >
                <motion.div
                  animate={{ rotate: halfCircle1.position.rotate }}
                  style={{
                    // position: "absolute",
                    scale: scaling,
                    y: invertParallax,
                    rotate: halfCircle1.position.rotate,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    duration: 0.5,
                  }}
                >
                  <HalfCircle
                    // position={"absolute"}
                    width={"150px"}
                    height={"150px"}
                    fill={"brand.primary"}
                  ></HalfCircle>
                </motion.div>
              </motion.div>
              <motion.div
                style={{
                  position: "absolute",
                  width: "150px",
                }}
                animate={{
                  x: halfCircle2.position.x,
                  y: halfCircle2.position.y,
                  scale: halfCircle2.position.scale,
                  opacity: halfCircle2.position.opacity,
                }}
                transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: halfCircle2.position.rotate }}
                  style={{
                    position: "absolute",
                    scale: scaling,
                    y: invertParallax,
                  }}
                  transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
                >
                  <Image
                    src='/images/halfCirclePhilippe.png'
                    width={"150px"}
                    height={"150px"}
                    alt='philippe'
                    priority
                  />
                </motion.div>
              </motion.div>

              <motion.div
                style={{ position: "absolute" }}
                animate={mathias.position}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  duration: 0.5,
                  delay: mathias.delay,
                }}
              >
                <motion.div
                  style={{
                    scale: scaling,
                    y: invertParallax,
                  }}
                >
                  <Image
                    src='/images/mathias.jpg'
                    width={"150px"}
                    height={"150px"}
                    alt={"mathias"}
                    style={{ borderRadius: 100 }}
                    priority
                  />
                </motion.div>
              </motion.div>
              <motion.div
                style={{ position: "absolute" }}
                animate={ludovic.position}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  duration: 0.5,
                  delay: ludovic.delay,
                }}
              >
                <motion.div
                  style={{
                    scale: scaling,
                    y: invertParallax,
                  }}
                >
                  <Image
                    src='/images/ludovic.jpg'
                    width={"150px"}
                    height={"150px"}
                    style={{ borderRadius: 100 }}
                    alt={"ludovic"}
                    priority
                  />
                </motion.div>
              </motion.div>

              <motion.div
                style={{ position: "absolute" }}
                animate={circle1.position}
                transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
              >
                <Circle
                  transform={`scale(${scaling})`}
                  width={"90px"}
                  height={"90px"}
                  fill={circle1.fill}
                ></Circle>
              </motion.div>
              <TinyArc
                position={"absolute"}
                width={"101px"}
                height={"69px"}
                fill={"brand.highlight"}
                top={"525px"}
                right={"17"}
                transform={`rotate(215deg) scale(${scaling})`}
              ></TinyArc>
              <Arc
                position={"absolute"}
                width={"175px"}
                height={"175px"}
                fill={"brand.tertiary"}
                top={"627px"}
                left={"-30px"}
                transform={`scale(${scaling})`}
              ></Arc>
              <TinyArc
                position={"absolute"}
                width={"101px"}
                height={"69px"}
                fill={"brand.secondary"}
                top={{ base: "2340px", lg: "2600px" }}
                left={{ base: "-5", lg: "10" }}
                transform={`rotate(40deg) scale(${scaling})`}
              ></TinyArc>
              <Circle
                position={"absolute"}
                width={"170px"}
                height={"170px"}
                fill={"brand.primary"}
                top={{ base: "2950px", md: "3150px" }}
                right={"-120px"}
                transform={`scale(${scaling})`}
              ></Circle>
              <HalfCircle
                position={"absolute"}
                width={"130px"}
                height={"130px"}
                fill={"brand.tertiary"}
                top={{ base: "2850px", md: "3050px" }}
                left={"-40px"}
                transform={`rotate(200deg) scale(${scaling})`}
              ></HalfCircle>
              <TinyArc
                position={"absolute"}
                width={"100px"}
                height={"100px"}
                fill={"brand.tertiary"}
                top={{ base: "3540px", md: "3780px" }}
                right={{ base: "0px", lg: "70px" }}
                transform={`rotate(40deg) scale(${scaling})`}
              ></TinyArc>
              <motion.div
                style={{ position: "absolute" }}
                animate={circle2.position}
                transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
              >
                <Circle
                  width={"200px"}
                  height={"200px"}
                  fill={circle2.fill}
                  transform={`scale(${scaling})`}
                ></Circle>
              </motion.div>
              <motion.div
                style={{ position: "absolute" }}
                animate={arc1.position}
                transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
              >
                <Arc
                  transform={`scale(${scaling})`}
                  width={"100px"}
                  height={"100px"}
                  fill={arc1.fill}
                ></Arc>
              </motion.div>
              <HalfCircle
                position={"absolute"}
                top={{ base: "4800px", md: "5200px", lg: "5100px" }}
                right={{ base: "30px", lg: "300px" }}
                width={"150px"}
                height={"150px"}
                fill={"brand.highlight"}
                transform={`scale(${scaling})`}
              ></HalfCircle>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Flex>
  );
};

export default Pieces;
