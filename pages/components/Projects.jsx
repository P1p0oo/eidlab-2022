import { Center, Flex, Heading } from "@chakra-ui/react";
import Project from "./Project";

const Projects = () => {
  return (
    <Flex
      width={"100%"}
      color={"brand.bodyInvert"}
      direction={"column"}
      alignItems={"center"}
      mb={20}
    >
      <Heading as={"h2"} size={"3xl"}>
        Réalisations
      </Heading>
      <Flex direction={"column"}>
        <Project
          image={"/images/boiron.png"}
          title={"Site corpo Boiron"}
          techs={["ReactJS", "NextJS", "Drupal", "GraphQL"]}
          link={"https://www.boiron.fr/"}
        ></Project>
        <Project
          image={"/images/meunier.png"}
          title={"Distillerie Meunier"}
          techs={["Wordpress", "Javascript", "Drupal"]}
          link={"https://www.boiron.fr/"}
          revert={true}
        ></Project>
        <Project
          image={"/images/lespipelettes.png"}
          title={"Les Pipelettes"}
          techs={["ReactJS", "NodeJS", "Websocket", "Symfony"]}
          link={"https://www.boiron.fr/"}
        ></Project>
        <Project
          image={"/images/nouveaumonde.png"}
          title={"Nouveau Monde"}
          techs={["ReactJS", "Gatsby", "Wordpress", "GraphQL"]}
          link={"https://www.boiron.fr/"}
          revert={true}
        ></Project>
      </Flex>
    </Flex>
  );
};

export default Projects;
