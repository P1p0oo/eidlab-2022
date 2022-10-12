import {
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Arrow from "../svg/Arrow";

const Project = ({ image, techs, title, link, revert }) => {
  return (
    <Flex
      m={7}
      mt={20}
      direction={{ base: "column", lg: revert ? "row-reverse" : "row" }}
    >
      <Link
        href={link}
        isExternal
        _hover={{ cursor: 'url("/svg/cursorProject.svg") 45 45, pointer' }}
      >
        <Image
          src={image}
          alt='project-thumbnail'
          maxWidth={{ base: "100%", lg: 600 }}
        />
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
          <Heading as={"h3"} size={"2xl"} mt={2}>
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
