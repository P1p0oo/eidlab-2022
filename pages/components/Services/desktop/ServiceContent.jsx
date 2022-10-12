import { Flex, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const ServiceContent = ({ service, select, selectedService }) => {
  if (!service) return null;
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
      {selectedService == select ? (
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          exit={{ transform: "scale(0)" }}
          transition={{ type: "spring", duration: 0.5, stiffness: 70 }}
        >
          <Image alt='service-thumbnail' src={service.img} width={300} />
        </motion.div>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default ServiceContent;
