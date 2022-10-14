import { Flex, Heading, Link } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Header = ({ bgColor }) => {
  return (
    <Flex
      padding={4}
      pl={{ base: 4, lg: 40 }}
      pr={{ base: 4, lg: 40 }}
      justifyContent={"space-between"}
      alignItems={"end"}
      position={"fixed"}
      width={"100%"}
      zIndex={99}
      maxW={"container.xxl"}
    >
      <Link href='#'>
        <Flex alignItems={"end"} position={"relative"}>
          <Image
            alt='logo'
            src={"/images/logo.png"}
            width={50}
            height={45}
            opacity={bgColor == "brand.primary" ? "0%" : "100%"}
            style={{
              transitionDuration: "1s",
              opacity: bgColor == "brand.primary" ? "0%" : "100%",
            }}
            priority
          />
          <Flex position={"absolute"}>
            <Image
              alt='black-logo'
              src={"/images/blackLogo.png"}
              width={50}
              height={45}
              style={{
                transitionDuration: "1s",
                opacity: bgColor == "brand.primary" ? "100%" : "0%",
              }}
            />
          </Flex>
          <Heading
            as={"h1"}
            size={"lg"}
            mb={0.25}
            ml={3}
            fontWeight={"bold"}
            color={bgColor == "brand.body" ? "brand.bodyInvert" : "brand.body"}
            transitionDuration={"1s"}
          >
            Eid Lab
          </Heading>
        </Flex>
      </Link>
      <Link mb={0.25} href={"#contact"}>
        <Heading
          as={"h2"}
          size={"lg"}
          color={bgColor == "brand.body" ? "brand.bodyInvert" : "brand.body"}
          transitionDuration={"1s"}
        >
          Contact
        </Heading>
      </Link>
    </Flex>
  );
};

export default Header;
