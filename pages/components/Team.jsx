import { Flex, Heading, Text } from "@chakra-ui/react";
import Circle from "../svg/Circle";
import { motion } from "framer-motion";
import { useRef } from "react";

const Team = () => {
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

  const techContainer = useRef();

  const bannerSize = `${(techList.length - 5) * 35}%`;

  return (
    <Flex
      height={"100vh"}
      width={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
      overflowX={"hidden"}
      id='team'
    >
      <Heading as={"h2"} size={"3xl"} textAlign={"center"} mt={16}>
        L{"'"}équipe
      </Heading>
      <Flex
        direction={"column"}
        height={"100%"}
        justifyContent={"space-around"}
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

        <Flex direction={"column"} ml={170}>
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

      <motion.div
        initial={{
          x: `-${(techList.length - 8) * 35}%`,
        }}
        animate={{ x: "0%" }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
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
    </Flex>
  );
};

export default Team;
