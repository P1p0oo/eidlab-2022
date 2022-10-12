import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Service = ({ image, title, text, index }) => {
  return (
    <Flex direction={"column"} width={300} m={5} id={`service-${index}`}>
      <Box height={200}>
        <Image
          src={image}
          alt='service-image'
          layout='responsive'
          width={"600"}
          height={"375"}
          objectFit={"contain"}
          mb={5}
        />
      </Box>
      <Heading as={"h3"} color={"brand.secondary"}>
        {title}
      </Heading>
      <Text fontSize={"lg"} fontWeight={"semibold"}>
        {text}
      </Text>
    </Flex>
  );
};

export default Service;
