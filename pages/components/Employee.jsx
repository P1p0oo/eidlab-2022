import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Employee = ({
  employee,
  revert,
  index,
  piecesTargets,
  setPiecesTargets,
}) => {
  useEffect(() => {
    console.log(piecesTargets);
  }, [piecesTargets]);
  piecesTargets && (
    <Flex
      direction={revert ? "row-reverse" : "row"}
      justifyContent={revert ? "end" : "start"}
      alignItems={"center"}
    >
      <Box
        width={{ base: 170 }}
        height={{ base: 150 }}
        // ref={piecesTargets[index]}
      ></Box>
      <Flex direction={"column"} alignItems={revert ? "end" : "start"}>
        <Heading
          as={"h3"}
          size={{ base: "lg", lg: "xl" }}
          color={"brand.primary"}
        >
          {employee.name}
        </Heading>
        <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight={"bold"} m={0}>
          {employee.position}
        </Text>
        <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight={"bold"} m={0}>
          {employee.description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Employee;
