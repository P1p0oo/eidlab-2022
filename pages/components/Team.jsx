import { Flex, Text } from "@chakra-ui/react";

const Team = () => {
  return (
    <Flex
      bg={"brand.secondary"}
      height={"100vh"}
      width={"100%"}
      direction={"column"}
      justifyContent={"end"}
      overflowX={"scroll"}
    >
      <Flex
        justifyContent={"space-around"}
        width={"350%"}
        borderTop={"1px solid"}
        borderBottom={"1px solid"}
        borderTopColor={"brand.bodyInvert"}
        borderBottomColor={"brand.bodyInvert"}
        pt={7}
        pb={7}
        fontSize={"3xl"}
        color={"brand.bodyInvert"}
        bg={"brand.primary"}
      >
        <Text>HTML</Text>
        <Text>CSS</Text>
        <Text>JS</Text>
        <Text>REACTJS</Text>
        <Text>NODEJS</Text>
        <Text>PHP</Text>
        <Text>GRAPHQL</Text>
        <Text>REST</Text>
        <Text>PHP</Text>
        <Text>WORDPRESS</Text>
      </Flex>
    </Flex>
  );
};

export default Team;
