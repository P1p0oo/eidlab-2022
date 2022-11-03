import { Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Arrow from "./svg/Arrow";

const Project = ({ image, techs, title, link, revert }) => {
  const displayImage = useAnimationControls();

  return (
    <Flex
      m={7}
      mt={20}
      direction={{ base: "column", lg: revert ? "row-reverse" : "row" }}
      height={"fit-content"}
    >
      <Link
        href={link}
        isExternal
        _hover={{ cursor: 'url("/svg/cursorProject.svg") 45 45, pointer' }}
        width={{ base: "100%", lg: 600 }}
        height={{ base: "fit-content", lg: 375 }}
        position={"relative"}
      >
        <motion.div initial={{ scale: 0 }} animate={displayImage}>
          <Image
            src={image}
            alt='project-thumbnail'
            layout='responsive'
            width={"600"}
            height={"375"}
            objectFit={"contain"}
            onLoadingComplete={() => displayImage.start({ scale: 1 })}
          />
        </motion.div>
      </Link>
      <Link
        href={link}
        isExternal
        _hover={{ cursor: 'url("/svg/cursorProject.svg") 45 45, pointer' }}
        height={"fit-content"}
        mt={5}
      >
        <Flex
          direction={"column"}
          m={{ base: 0, lg: 10 }}
          alignItems={{ lg: revert ? "end" : "start" }}
        >
          {techs && (
            <List>
              {techs.map((tech, index) => (
                <ListItem
                  fontSize={"xl"}
                  key={index}
                  display={"inline-block"}
                  mr={{ base: 5, lg: revert ? 0 : 5 }}
                  ml={{ base: 0, lg: revert ? 5 : 0 }}
                >
                  {tech}
                </ListItem>
              ))}
            </List>
          )}
          <Heading
            as={"h3"}
            size={"2xl"}
            mt={2}
            textAlign={{ base: "start", lg: revert ? "end" : "start" }}
          >
            {title}
          </Heading>

          <Text fontSize={"lg"} mt={2} color={"brand.highlight"}>
            Voir en live <Arrow fill={"brand.highlight"} mb={0.5}></Arrow>
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default Project;
