import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Arrow from "../svg/Arrow";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      initial={{ transform: "translateY(500px)", opacity: "0%" }}
      animate={{ transform: "translateY(0px)", opacity: "100%" }}
      exit={{ transform: "translateY(500px)", opacity: "0%" }}
      transition={{ type: "spring", duration: 3 }}
    >
      <Flex
        direction={"column"}
        alignItems={"center"}
        fontWeight={"bold"}
        fontSize={{ base: "3xl", lg: "6xl" }}
        height={"100vh"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Text color={"brand.secondary"}>Bienvenue !</Text>
        <Box>
          <Text display={"inline"} color={"brand.primary"}>
            Eid Lab{" "}
          </Text>
          <Text display={"inline"}>est un studio de</Text>
        </Box>
        <Text color={"brand.primary"}>développement web</Text>
        <Text> à Lyon.</Text>
        <Link
          href='#team'
          mt={600}
          position={"absolute"}
          width={"fit-content"}
          _hover={{ transform: "scale(1.3)" }}
          _active={{ transform: "scale(1.1)" }}
          transitionDuration={"0.5s"}
        >
          <Arrow
            transform={"rotate(90deg)"}
            height={35}
            width={40}
            fill={"brand.body"}
          />
        </Link>
      </Flex>
    </motion.div>
  );
};

export default Intro;
