import { Icon } from "@chakra-ui/icons";

const HalfCircle = ({
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
      viewBox='0, 0, 126, 127'
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
      <path d='M23.2158 126.343C9.22646 112.806 1.18377 94.2655 0.856996 74.7993C0.530225 55.3331 7.94613 36.5362 21.4733 22.5435C35.0005 8.5508 53.5309 0.508627 72.9881 0.186182C92.4452 -0.136262 111.235 7.28742 125.224 20.8241' />
    </Icon>
  );
};

export default HalfCircle;
