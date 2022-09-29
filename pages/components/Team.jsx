import { Flex, Text } from "@chakra-ui/react";
import Circle from "../svg/Circle";

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
    "PHP",
    "WORDPRESS",
  ];

  const bannerSize = `${techList.length * 35}%`;

  return (
    <Flex
      height={"100vh"}
      width={"100%"}
      direction={"column"}
      justifyContent={"end"}
      overflowX={"scroll"}
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
      >
        {techList.map((tech, index) => {
          return <Text key={index}>{tech}</Text>;
        })}
      </Flex>
    </Flex>
  );
};

export default Team;
