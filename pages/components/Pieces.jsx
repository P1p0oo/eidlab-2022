import { Box, Image } from "@chakra-ui/react";
import Arc from "../svg/Arc";
import Circle from "../svg/Circle";
import HalfCircle from "../svg/HalfCircle";
import TinyArc from "../svg/TinyArc";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Pieces = ({ windowWidth, pagePosition, isDesktop, paralax }) => {
  const [bodyHeight, setBodyHeight] = useState(undefined);

  const [scaling, setScaling] = useState(1.0);

  const ref = useRef(null);

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
    if (!ref.current) return;
    setBodyHeight(ref.current.clientHeight);
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
        x: windowWidth - 60,
        y: 150,
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
  }, [bodyHeight, windowWidth, ref]);

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
            x: windowWidth - 60,
            y: 150,
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
            x: windowWidth >= 992 ? 280 : 100,
            y: 1215,
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
          delay: 0,
        });
        setLudovic({
          position: {
            x: -200,
            y: 1530,
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
            y: 1000,
            scale: 2,
          },
          fill: "brand.highlight",
        });
        setHalfCircle1({
          position: {
            x: windowWidth >= 992 ? 370 : 170,
            y: windowWidth >= 992 ? 1190 : 1100,
            scale: 1,
            rotate: 110,
            opacity: 0,
          },
          fill: "brand.primary",
        });
        setHalfCircle2({
          position: {
            x: windowWidth >= 992 ? 222 : 22,
            y: windowWidth >= 992 ? 1178 : 1088,
            scale: 1,
            rotate: 10,
            opacity: 1,
          },
        });
        setTinyArc1({
          position: {
            x: windowWidth >= 992 ? 233 : 33,
            y: windowWidth >= 992 ? 1295 : 1195,
            scale: 0.8,
            rotate: 0,
            opacity: 1,
          },
          fill: "brand.primary",
          delay: 1,
        });
        setMathias({
          position: {
            x: windowWidth >= 992 ? windowWidth - 370 : windowWidth - 170,
            y: windowWidth >= 992 ? 1350 : 1300,
            scale: 0.8,
            opacity: 1,
          },
          delay: 0.25,
        });
        setLudovic({
          position: {
            x: windowWidth >= 992 ? 210 : 10,
            y: 1530,
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
            y: windowWidth >= 992 ? 1870 : 1849,
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
            y: windowWidth >= 992 ? 1350 : 1300,
            scale: 0.8,
            opacity: 0,
          },
          delay: 0,
        });
        setLudovic({
          position: {
            x: -200,
            y: 1530,
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
  }, [pagePosition, windowWidth, bodyHeight]);

  return (
    <Box
      position={"absolute"}
      zIndex={0}
      width={"100%"}
      height={"100%"}
      ref={ref}
      overflowY={"hidden"}
    >
      <motion.div style={{ y: paralax }}>
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
              <TinyArc
                fill={"brand.primary"}
                transform={`scale(${scaling})`}
                position={"absolute"}
                width={"101px"}
                height={"69px"}
              ></TinyArc>
            </motion.div>
            <motion.div
              style={{ position: "absolute" }}
              animate={halfCircle1.position}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 0.5,
              }}
            >
              <HalfCircle
                position={"absolute"}
                width={"150px"}
                height={"150px"}
                fill={"brand.primary"}
                transform={`scale(${scaling})`}
              ></HalfCircle>
            </motion.div>
            <motion.div
              style={{ position: "absolute", width: "150px" }}
              animate={halfCircle2.position}
              transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
            >
              <Image
                src='/images/halfCirclePhilippe.png'
                width={"150px"}
                height={"150px"}
                position={"absolute"}
                transform={`scale(${scaling})`}
                alt='philippe'
              />
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
              <Image
                src='/images/mathias.jpg'
                width={"150px"}
                height={"150px"}
                borderRadius={100}
                alt={"mathias"}
                transform={`scale(${scaling})`}
              />
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
              <Image
                src='/images/ludovic.jpg'
                width={"150px"}
                height={"150px"}
                borderRadius={100}
                transform={`scale(${scaling})`}
                alt={"ludovic"}
              />
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
    </Box>
  );
};

export default Pieces;
