import { Flex, Image, Text } from "@chakra-ui/react";

const ServiceContent = ({ service, select, selectedService }) => {
  return (
    <Flex
      direction={"column"}
      position={"absolute"}
      opacity={selectedService == select ? 100 : 0}
      alignItems={"center"}
      transitionDuration={"0.5s"}
    >
      <Text fontWeight={"medium"} fontSize={"2xl"} mb={10}>
        {service.description}
      </Text>
      <Image alt='service-thumbnail' src={service.img} width={300} />
    </Flex>
  );
};

export default ServiceContent;
