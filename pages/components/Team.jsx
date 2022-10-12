import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Employee from "./Employee";

const Team = ({ pagePosition, isDesktop, piecesTagets, setPiecesTargets }) => {
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

  const employees = [
    {
      name: "Philippe Eid",
      position: "CEO",
      description: "8 ans d'expérience",
    },
    {
      name: "Mathias Emile",
      position: "Alternant",
      description: "Etudiant ingénieur",
    },
    {
      name: "Ludovic Fayolle",
      position: "Alternant",
      description: "Etudiant ingénieur",
    },
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
      <Container height={"100%"} maxW={"container.xxl"}>
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
                {employees?.map((employee, index) => (
                  <Employee
                    key={index}
                    employee={employee}
                    revert={index % 2 > 0}
                    piecesTagets={piecesTagets}
                    setPiecesTargets={setPiecesTargets}
                    index={index}
                  ></Employee>
                ))}
              </Flex>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

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
