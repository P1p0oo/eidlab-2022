import { Center, Container, Flex, Heading } from "@chakra-ui/react";
import Project from "./Project";

const Projects = () => {
  return (
    <Container
      maxW={"container.xxl"}
      pl={{ base: 0, xl: 20, "3xl": 0 }}
      pr={{ base: 0, xl: 20, "3xl": 0 }}
    >
      <Flex
        width={"100%"}
        color={"brand.bodyInvert"}
        direction={"column"}
        alignItems={"space-between"}
        mb={20}
      >
        <Heading as={"h2"} size={"3xl"} textAlign={"center"}>
          Réalisations
        </Heading>
        <Flex direction={"column"}>
          <Project
            image={"/images/inside-lyon.png"}
            title={"Inside Lyon"}
            techs={["Wordpress", "Elementor", "PHP", "Javascript"]}
            link={"https://www.inside-lyon.com/"}
          ></Project>
          <Project
            image={"/images/meunier.png"}
            title={"Distillerie Meunier"}
            techs={["Wordpress", "Javascript", "Drupal"]}
            link={"https://www.distillerie-meunier.fr/"}
            revert={true}
          ></Project>
          <Project
            image={"/images/boiron.png"}
            title={"Site corpo Boiron"}
            techs={["ReactJS", "NextJS", "Drupal", "GraphQL"]}
            link={"https://www.boiron.fr/"}
          ></Project>

          <Project
            image={"/images/nouveaumonde.png"}
            title={"Nouveau Monde"}
            techs={["ReactJS", "Gatsby", "Wordpress", "GraphQL"]}
            link={"https://www.nouveaumonde.fr/"}
            revert={true}
          ></Project>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Projects;
