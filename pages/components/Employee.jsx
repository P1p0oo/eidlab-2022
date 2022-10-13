import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Employee = ({
  employee,
  revert,
  index,
  piecesTagets,
  setPiecesTargeted,
}) => {
  useEffect(() => {
    setPiecesTargeted(piecesTagets.current);
  }, [piecesTagets, setPiecesTargeted]);
  return (
    <Flex
      direction={revert ? "row-reverse" : "row"}
      justifyContent={revert ? "end" : "start"}
      alignItems={"center"}
    >
      <Box
        width={{ base: 170, lg: 200 }}
        height={{ base: 150 }}
        mr={{ base: 0, lg: revert ? 0 : 10 }}
        ml={{ base: 0, lg: revert ? 10 : 0 }}
        ref={(el) => (piecesTagets.current[index] = el)}
      ></Box>
      {employee && <Flex direction={"column"} alignItems={revert ? "end" : "start"}>
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
      </Flex>}
    </Flex>
  );
};

export default Employee;
