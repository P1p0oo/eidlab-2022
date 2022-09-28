import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import Arrow from "../svg/Arrow";

const Intro = () => {
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      fontWeight={"bold"}
      fontSize={"3xl"}
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
      <Arrow
        transform={"rotate(90deg)"}
        mt={600}
        position={"absolute"}
        height={35}
        width={40}
        fill={"brand.body"}
      />
    </Flex>
  );
};

export default Intro;
