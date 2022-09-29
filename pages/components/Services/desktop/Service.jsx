import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const Service = ({ image, title, text }) => {
  return (
    <Flex direction={"column"} width={300} m={5}>
      <Image
        src={image}
        alt='service-image'
        height={200}
        width={"fit-content"}
        mb={5}
      />
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
