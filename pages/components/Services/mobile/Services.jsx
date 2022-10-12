import { Flex, Heading, Link } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Arrow from "../../../svg/Arrow";
import Service from "./Service";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const servicesContainer = useRef();

  const services = [
    {
      image: "/images/website.png",
      title: "Le développement de sites web",
      text: "Qu’il s’agisse d’un site e-commerce ou vitrine, je vous livre votre site et vous accompagne dans la prise en main de votre back office.",
    },
    {
      image: "/images/app.png",
      title: "Le développement d'applications",
      text: "Qu'il s'agisse d'une application native ou d'une PWA, je vous accompagne pour le développement de vos applications.",
    },
    {
      image: "/images/ref.png",
      title: "Votre référencement",
      text: "Votre site sera développé en portant une attention particulière aux bonnes pratiques liées au référencement (SEO) pour les différents moteurs de recherche.",
    },
    {
      image: "/images/tips.png",
      title: "Les bonnes pratiques du web",
      text: "Votre site sera développé en respectant les bonnes pratiques du Web. Ainsi, il sera optimisé pour les différents types de navigateurs et d'appareils.",
    },
    {
      image: "/images/host.png",
      title: "Votre hébergement",
      text: "Afin d'obtenir les meilleurs performances pour votre site Web, ce dernier sera hebergé sur un serveur dédié, puissant et supportant la montée en charge.",
    },
    {
      image: "/images/maintenance.png",
      title: "Votre maintenance",
      text: "Afin de vous garantir un site Web performant dans le temps, je vous accompagne dans la maintenance de ce dernier. En effet, un site à jour est un site en bonne santé.",
    },
  ];

  useEffect(() => {
    if (servicesContainer.current == undefined) return;
    servicesContainer.current.scrollLeft =
      (selectedService * servicesContainer.current.scrollWidth) /
      services.length;
  }, [selectedService, services.length]);

  return (
    <Flex
      height={"100vh"}
      width={"100%"}
      direction={"column"}
      justifyContent={"center"}
      color={"brand.bodyInvert"}
      mb={20}
    >
      <Heading
        as='h2'
        size={"3xl"}
        width={"80%"}
        ml={7}
        textAlign={"center"}
        margin={"auto"}
        mb={9}
      >
        Je peux vous accompagner sur :
      </Heading>
      <Flex
        overflowX={"scroll"}
        ref={servicesContainer}
        scrollBehavior={"smooth"}
      >
        <Flex width={"600%"}>
          {services.map((service, index) => {
            return (
              <Service
                key={index}
                image={service.image}
                title={service.title}
                text={service.text}
                index={index}
              ></Service>
            );
          })}
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} mt={"5"}>
        <Arrow
          width={30}
          height={30}
          fill={"brand.secondary"}
          transform={"rotate(180deg)"}
          mr={3}
          transitionDuration={"0.1s"}
          onClick={() =>
            setSelectedService(
              selectedService > 0 ? selectedService - 1 : selectedService
            )
          }
          _active={{ opacity: 0.6, transform: "scale(0.9) rotate(180deg)" }}
        ></Arrow>
        <Arrow
          ml={3}
          width={30}
          height={30}
          fill={"brand.secondary"}
          transitionDuration={"0.1s"}
          onClick={() =>
            setSelectedService(
              selectedService < services.length - 1
                ? selectedService + 1
                : selectedService
            )
          }
          _active={{ opacity: 0.6, transform: "scale(0.9)" }}
        ></Arrow>
      </Flex>
    </Flex>
  );
};

export default Services;
