import { Container, Flex, Heading, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import Arrow from "../../../svg/Arrow";

import ServiceContent from "./ServiceContent";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const servicesTitles = [
    "Le développement de sites web",
    "Le développement d’applications",
    "Votre référencement",
    "Les  bonnes pratiques du web",
    "Votre hébergement",
    "Votre maintenance",
  ];

  const services = [
    {
      description:
        "Afin de vous garantir un site Web performant dans le temps, je vous accompagne dans la maintenance de ce dernier. En effet, un site à jour est un site en bonne santé.",
      img: "/images/website.png",
    },
    {
      description:
        "Qu'il s'agisse d'une application native ou d'une PWA, je vous accompagne pour le développement de vos applications.",
      img: "/images/app.png",
    },
    {
      description:
        "Votre site sera développé en portant une attention particulière aux bonnes pratiques liées au référencement (SEO) pour les différents moteurs de recherche.",
      img: "/images/ref.png",
    },
    {
      description:
        "Votre site sera développé en respectant les bonnes pratiques du Web. Ainsi, il sera optimisé pour les différents types de navigateurs et de devices.",
      img: "/images/tips.png",
    },
    {
      description:
        "Afin d'obtenir les meilleurs performances pour votre site Web, ce dernier sera hebergé sur un serveur dédié, puissant et supportant la montée en charge.",
      img: "/images/host.png",
    },
    {
      description:
        "Afin de vous garantir un site Web performant dans le temps, je vous accompagne dans la maintenance de ce dernier. En effet, un site à jour est un site en bonne santé.",
      img: "/images/maintenance.png",
    },
  ];

  return (
    <Container maxW={"container.xxl"}>
      <Flex
        height={"100vh"}
        width={"100%"}
        direction={"column"}
        color={"brand.bodyInvert"}
        justifyContent={"center"}
        alignItems={"center"}
        p={20}
        pt={40}
      >
        <Heading as='h2' size={"3xl"} textAlign={"center"}>
          Je peux vous accompagner sur :
        </Heading>
        <Flex mt={20} width={"100%"} height={"100%"}>
          <List fontWeight={"semibold"} width={"50%"}>
            {servicesTitles.map((serviceTitle, index) => (
              <ListItem
                key={index}
                transitionDuration={"0.25s"}
                fontSize={selectedService == index ? "4xl" : "2xl"}
                color={
                  selectedService == index
                    ? "brand.secondary"
                    : "brand.bodyInvert"
                }
                cursor={"pointer"}
                mt={4}
                onMouseEnter={() => {
                  setSelectedService(index);
                }}
              >
                {serviceTitle}{" "}
                {selectedService == index ? (
                  <Arrow fill={"brand.secondary"} ml={3} height={6}></Arrow>
                ) : (
                  ""
                )}
              </ListItem>
            ))}
          </List>
          {services && (
            <Flex position={"relative"} width={"50%"}>
              {services.map((service, index) => (
                <ServiceContent
                  key={index}
                  service={service}
                  select={index}
                  selectedService={selectedService}
                ></ServiceContent>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Services;
