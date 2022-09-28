import { Icon } from "@chakra-ui/icons";

const Arc = ({
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
      viewBox='0, 0, 651, 381'
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
      <path
        d='M0.325495 351.225L37.7712 244.807C93.9237 264.585 153.831 271.37 212.984 264.65C287.329 256.104 357.78 226.853 416.314 180.228C474.848 133.603 519.114 71.4784 544.069 0.927892L650.543 38.2533C618.505 128.823 561.678 208.576 486.534 268.432C411.389 328.287 320.947 365.839 225.507 376.812C149.477 385.444 72.4802 376.695 0.325495 351.225Z'
        fill='#83EAE4'
      />
    </Icon>
  );
};

export default Arc;
