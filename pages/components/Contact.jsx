import { Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import Circle from "../svg/Circle";

const Contact = () => {
  return (
    <Flex
      direction={"column"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      id='contact'
    >
      <Heading
        as={"h2"}
        fontSize={{ base: "5xl", lg: "7xl" }}
        color={"brand.bodyInvert"}
        mb={5}
      >
        Contact
      </Heading>
      <Link
        fontWeight={"semibold"}
        fontSize={"4xl"}
        color={"brand.secondary"}
        href='mailto:philippe@eid-lab.com'
        mb={10}
        textAlign={"center"}
      >
        philippe@eid-lab.com
      </Link>
      <Link isExternal href='https://fr.linkedin.com/company/eid-lab'>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            mt={10}
            position={"relative"}
            width={81}
            role='group'
            _hover={{ width: 300 }}
            transitionDuration={"0.5s"}
          >
            <Flex
              width={"100%"}
              height={81}
              borderRadius={100}
              backgroundColor={"brand.body"}
              position={"absolute"}
              justifyContent={"center"}
              overflow={"hidden"}
              alignItems={"center"}
            >
              <Text color={"brand.bodyInvert"} fontSize={"2xl"}>
                Eid Lab
              </Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              width={81}
              height={81}
              borderRadius={100}
              backgroundColor={"brand.bodyInvert"}
              _groupHover={{ transform: "translateX(-120px)" }}
              position={"absolute"}
              transitionDuration={"0.5s"}
            >
              <Icon
                viewBox='0 0 41 40'
                position={"absolute"}
                boxSize={31}
                mb={1}
                ml={0.5}
              >
                <path
                  d='M40.0366 25.0752V39.8952H31.4466V26.0752C31.4466 22.5952 30.2066 20.2252 27.0966 20.2252C26.1262 20.2308 25.1814 20.5366 24.3918 21.1006C23.6022 21.6646 23.0065 22.4592 22.6866 23.3752C22.4652 24.0487 22.3703 24.7573 22.4066 25.4652V39.8952H13.8566C13.8566 39.8952 13.9766 16.4852 13.8566 14.0552H22.4566V17.7152C22.4332 17.7428 22.413 17.773 22.3966 17.8052H22.4566V17.7152C23.2349 16.3662 24.3676 15.2561 25.7321 14.5051C27.0965 13.7541 28.6405 13.3911 30.1966 13.4552C35.8466 13.4552 40.0866 17.1452 40.0866 25.0752H40.0366ZM0.476562 39.8952H9.06656V14.0552H0.476562V39.8952ZM9.31656 5.29523C9.31458 6.16899 9.05368 7.02257 8.5668 7.74812C8.07993 8.47367 7.38894 9.03864 6.58112 9.37164C5.77329 9.70465 4.8849 9.79075 4.02817 9.61908C3.17143 9.4474 2.38479 9.02565 1.76764 8.4071C1.15049 7.78856 0.730529 7.00098 0.560791 6.14386C0.391053 5.28674 0.479164 4.39854 0.813995 3.59148C1.14883 2.78441 1.71534 2.09469 2.44199 1.60945C3.16863 1.12422 4.02281 0.865237 4.89658 0.865234C5.47786 0.865233 6.05342 0.979886 6.59033 1.20264C7.12724 1.42539 7.61495 1.75187 8.02551 2.16336C8.43608 2.57486 8.76147 3.06329 8.983 3.60071C9.20454 4.13812 9.31787 4.71394 9.31656 5.29523Z'
                  fill='black'
                />
              </Icon>
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
};

export default Contact;
