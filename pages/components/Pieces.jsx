import { Box } from "@chakra-ui/react";
import Arc from "../svg/Arc";
import Circle from "../svg/Circle";
import HalfCircle from "../svg/HalfCircle";
import TinyArc from "../svg/TinyArc";

const Pieces = () => {
  return (
    <Box position={"absolute"} zIndex={0} width={"100%"}>
      <Circle
        position={"absolute"}
        width={"130px"}
        height={"130px"}
        top={"120.16px"}
        left={"-80.66px"}
        fill={"brand.secondary"}
      ></Circle>
      <HalfCircle
        position={"absolute"}
        width={"150"}
        height={"150px"}
        fill={"brand.primary"}
        top={"118px"}
        right={"-40px"}
        transform={"rotate(90deg)"}
      ></HalfCircle>
      <Circle
        position={"absolute"}
        width={"90px"}
        height={"90px"}
        fill={"brand.primary"}
        top={"539px"}
        right={"67px"}
      ></Circle>
      <TinyArc
        position={"absolute"}
        width={"101px"}
        height={"69px"}
        fill={"brand.highlight"}
        top={"525px"}
        right={"17"}
        transform={"rotate(215deg)"}
      ></TinyArc>
      <Arc
        position={"absolute"}
        width={"175px"}
        height={"175px"}
        fill={"brand.tertiary"}
        top={"627px"}
        left={"-30px"}
      ></Arc>
      <Circle
        position={"absolute"}
        width={"200px"}
        height={"200px"}
        fill={"brand.tertiary"}
        top={"1750px"}
        right={"-100px"}
        zIndex={0}
      ></Circle>
      <TinyArc
        position={"absolute"}
        width={"101px"}
        height={"69px"}
        fill={"brand.secondary"}
        top={"2770px"}
        left={"-5"}
        transform={"rotate(40deg)"}
      ></TinyArc>
      <Circle
        position={"absolute"}
        width={"170px"}
        height={"170px"}
        fill={"brand.primary"}
        top={"3150px"}
        right={"-100px"}
      ></Circle>
    </Box>
  );
};

export default Pieces;
