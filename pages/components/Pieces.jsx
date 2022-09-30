import { Box } from "@chakra-ui/react";
import Arc from "../svg/Arc";
import Circle from "../svg/Circle";
import HalfCircle from "../svg/HalfCircle";
import TinyArc from "../svg/TinyArc";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Pieces = ({ windowWidth, pagePosition, isDesktop }) => {
  const [bodyHeight, setBodyHeight] = useState(undefined);
  const [circle1, setCircle1] = useState({
    position: {},
    fill: "",
  });
  const [circle2, setCircle2] = useState({
    position: {},
    fill: "",
  });
  const [arc1, setArc1] = useState({
    position: {},
    fill: "",
  });
  const [scaling, setScaling] = useState(1.0);

  const ref = useRef(null);

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
        break;
      case 1:
        setCircle1({
          position: {
            x: windowWidth - 15,
            y: 1039,
            scale: 2,
          },
          fill: "brand.highlight",
        });
        break;
      case 2:
        setCircle1({
          position: {
            x: windowWidth >= 992 ? windowWidth - 250 : windowWidth - 80,
            y: windowWidth >= 992 ? 1700 : 1499,
            scale: 1.8,
          },
          fill: "brand.tertiary",
        });
        setCircle2({
          position: {
            x: windowWidth - 120,
            y:
              windowWidth >= 992
                ? bodyHeight - 1500
                : windowWidth >= 768
                ? bodyHeight - 1650
                : bodyHeight - 1450,
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
                : bodyHeight - 1330,
            scale: 1.2,
          },
          fill: "brand.secondary",
        });
        break;
      case 3:
        setCircle2({
          position: {
            x: windowWidth - 150,
            y: bodyHeight - 155,
            scale: 1.2,
          },
          fill: "brand.secondary",
        });
        setArc1({
          position: {
            x: 0,
            y: bodyHeight - 250,
            scale: 1.2,
          },
          fill: "brand.tertiary",
        });
        break;
      default:
        break;
    }
  }, [pagePosition, windowWidth, bodyHeight]);

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

    setCircle2({
      position: {
        x: windowWidth - 120,
        y:
          windowWidth >= 992
            ? bodyHeight - 1500
            : windowWidth >= 768
            ? bodyHeight - 1650
            : bodyHeight - 1450,
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
            : bodyHeight - 1330,
        scale: 1.2,
      },
      fill: "brand.secondary",
    });
  }, [bodyHeight, windowWidth, ref]);

  return (
    <Box
      position={"absolute"}
      zIndex={0}
      width={"100%"}
      height={"100%"}
      ref={ref}
      overflowY={"hidden"}
    >
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
          <HalfCircle
            position={"absolute"}
            width={"150"}
            height={"150px"}
            fill={"brand.primary"}
            top={"118px"}
            right={"-40px"}
            transform={`rotate(90deg) scale(${scaling})`}
          ></HalfCircle>
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
            top={{ base: "2340px", lg: "2440px" }}
            left={{ base: "-5", lg: "10" }}
            transform={`rotate(40deg) scale(${scaling})`}
          ></TinyArc>
          <Circle
            position={"absolute"}
            width={"170px"}
            height={"170px"}
            fill={"brand.primary"}
            top={{ base: "2750px", md: "2950px" }}
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
            top={{ base: "3340px", md: "3780px" }}
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
            top={{ base: "4350px", md: "5200px", lg: "4650px" }}
            right={{ base: "30px", lg: "300px" }}
            width={"150px"}
            height={"150px"}
            fill={"brand.highlight"}
            transform={`scale(${scaling})`}
          ></HalfCircle>
        </motion.div>
      )}
    </Box>
  );
};

export default Pieces;
