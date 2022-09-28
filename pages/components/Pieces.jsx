import { Box } from "@chakra-ui/react";
import Arc from "../svg/Arc";
import Circle from "../svg/Circle";
import HalfCircle from "../svg/HalfCircle";
import TinyArc from "../svg/TinyArc";

const Pieces = () => {
  return (
    <Box position={"absolute"}>
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
        left={"320px"}
        transform={"rotate(90deg)"}
      ></HalfCircle>
      <Circle
        position={"absolute"}
        width={"90px"}
        height={"90px"}
        fill={"brand.primary"}
        top={"539px"}
        left={"267px"}
      ></Circle>
      <TinyArc
        position={"absolute"}
        width={"101px"}
        height={"69px"}
        fill={"brand.highlight"}
        top={"525px"}
        left={"317"}
        transform={"rotate(215deg)"}
      ></TinyArc>
      <Arc
        position={"absolute"}
        width={"175px"}
        height={"175px"}
        fill={"brand.tertiary"}
        top={"687px"}
        left={"-30px"}
      ></Arc>
    </Box>
  );
};

export default Pieces;
