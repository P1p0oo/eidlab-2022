import { Icon } from "@chakra-ui/icons";

const Circle = ({
  transform,
  mt,
  position,
  width,
  height,
  top,
  left,
  right,
  bottom,
  fill,
}) => {
  return (
    <Icon
      viewBox='0, 0, 235, 236'
      transform={transform}
      mt={mt}
      position={position}
      width={width}
      height={height}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      fill={fill}
    >
      <path d='M117.5 236C182.393 236 235 183.17 235 118C235 52.8304 182.393 0 117.5 0C52.6065 0 0 52.8304 0 118C0 183.17 52.6065 236 117.5 236Z' />
    </Icon>
  );
};

export default Circle;
