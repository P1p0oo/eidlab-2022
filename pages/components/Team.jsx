import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Team = ({ pagePosition, isDesktop }) => {
  const techList = [
    "HTML",
    "CSS",
    "JS",
    "REACTJS",
    "NODEJS",
    "PHP",
    "GRAPHQL",
    "REST",
    "WORDPRESS",
    "HTML",
    "CSS",
    "JS",
    "REACTJS",
    "NODEJS",
    "PHP",
    "GRAPHQL",
    "REST",
    "WORDPRESS",
    "HTML",
    "CSS",
    "JS",
    "REACTJS",
    "NODEJS",
    "PHP",
    "GRAPHQL",
    "REST",
    "WORDPRESS",
    "HTML",
    "CSS",
    "JS",
    "REACTJS",
    "NODEJS",
    "PHP",
    "GRAPHQL",
    "REST",
    "WORDPRESS",
    "HTML",
    "CSS",
    "JS",
    "REACTJS",
    "NODEJS",
    "PHP",
    "GRAPHQL",
    "REST",
    "WORDPRESS",
    "HTML",
    "CSS",
    "JS",
    "REACTJS",
    "NODEJS",
    "PHP",
    "GRAPHQL",
    "REST",
    "WORDPRESS",
  ];

  const bannerControls = useAnimationControls();

  const [bannerSize, setBannerSize] = useState(undefined);
  const [bannerMovement, setBannerMovement] = useState(undefined);

  useEffect(() => {
    setBannerSize(
      isDesktop
        ? `${(techList.length - 5) * 15}%`
        : `${(techList.length - 5) * 35}%`
    );
    setBannerMovement(
      isDesktop
        ? `-${(techList.length - 16) * 15}%`
        : `-${(techList.length - 8) * 35}%`
    );
  }, [isDesktop, techList.length]);

  useEffect(() => {
    if (!bannerSize || !bannerMovement) return;
    bannerControls.set({ x: "0%" });
    bannerControls.start({ x: bannerMovement });
  }, [bannerSize, bannerMovement, bannerControls]);

  const techContainer = useRef();

  return (
    <Flex
      height={"100vh"}
      width={{ base: "100%" }}
      direction={"column"}
      justifyContent={"space-between"}
      overflowX={"hidden"}
      id='team'
    >
      <Heading
        as={"h2"}
        size={"3xl"}
        textAlign={"center"}
        mt={16}
        mb={{ base: 0, lg: 14 }}
      >
        L{"'"}équipe
      </Heading>
      <AnimatePresence>
        {pagePosition == 1 && (
          <motion.div
            style={{ height: "100%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key='teamAnimation'
          >
            <Flex
              direction={"column"}
              height={"100%"}
              justifyContent={"space-around"}
              width={{ base: "100%", lg: "60%" }}
              margin={"auto"}
            >
              <Flex direction={"column"} ml={180}>
                <Heading as={"h3"} size={"xl"} color={"brand.primary"}>
                  Philippe Eid
                </Heading>
                <Text fontSize={"2xl"} fontWeight={"bold"} m={0}>
                  CEO
                </Text>
                <Text fontSize={"2xl"} fontWeight={"bold"} m={0}>
                  8 ans d{"'"}expérience
                </Text>
              </Flex>

              <Flex direction={"column"} alignItems={"end"} mr={180}>
                <Heading as={"h3"} size={"xl"} color={"brand.primary"}>
                  Mathias Emile
                </Heading>
                <Text fontSize={"2xl"} fontWeight={"bold"} m={0}>
                  Alternant
                </Text>
                <Text fontSize={"2xl"} fontWeight={"bold"} m={0}>
                  Etudiant ingénieur
                </Text>
              </Flex>

              <Flex direction={"column"} ml={170} mb={{ base: 0, lg: 10 }}>
                <Heading as={"h3"} size={"xl"} color={"brand.primary"}>
                  Ludovic Fayolle
                </Heading>
                <Text fontSize={"2xl"} fontWeight={"bold"} m={0}>
                  Alternant
                </Text>
                <Text fontSize={"2xl"} fontWeight={"bold"} m={0}>
                  Etudiant ingénieur
                </Text>
              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>

      {bannerSize && bannerMovement && (
        <motion.div
          initial={{
            x: "0%",
          }}
          animate={bannerControls}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          <Flex
            justifyContent={"space-around"}
            width={bannerSize}
            borderTop={"1px solid"}
            borderBottom={"1px solid"}
            borderTopColor={"brand.bodyInvert"}
            borderBottomColor={"brand.bodyInvert"}
            pt={7}
            pb={7}
            fontSize={"3xl"}
            color={"brand.bodyInvert"}
            bg={"brand.primary"}
            zIndex={1}
            ref={techContainer}
          >
            {techList.map((tech, index) => {
              return <Text key={index}>{tech}</Text>;
            })}
          </Flex>
        </motion.div>
      )}
    </Flex>
  );
};

export default Team;
