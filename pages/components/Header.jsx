import { Flex, Heading, Image, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      padding={4}
      justifyContent={"space-between"}
      alignItems={"end"}
      position={"fixed"}
      width={"100%"}
    >
      <Flex alignItems={"end"}>
        <Image alt='logo' src='/favicon.ico' width={50} />
        <Heading as={"h1"} size={"lg"} mb={0.25} ml={3} fontWeight={"bold"}>
          Eid Lab
        </Heading>
      </Flex>
      <Link mb={0.25}>
        <Heading as={"h2"} size={"lg"}>
          Contact
        </Heading>
      </Link>
    </Flex>
  );
};

export default Header;
