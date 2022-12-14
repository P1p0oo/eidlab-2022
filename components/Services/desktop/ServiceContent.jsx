import { Flex, Text } from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

const ServiceContent = ({ service, select, selectedService }) => {
  const displayImage = useAnimationControls();
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
          style={{ width: 300 }}
        >
          <motion.div initial={{ scale: 0 }} animate={displayImage}>
            <Image
              alt='service-thumbnail'
              src={service.img}
              layout='responsive'
              width={"500"}
              height={"375"}
              objectFit={"contain"}
              onLoadingComplete={() => displayImage.start({ scale: 1 })}
            />
          </motion.div>
        </motion.div>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default ServiceContent;
