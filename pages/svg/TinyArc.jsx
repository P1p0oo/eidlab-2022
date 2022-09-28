import { Icon } from "@chakra-ui/icons";

const TinyArc = ({
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
      viewBox='0, 0, 112, 54'
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
      <path d='M0.740974 45.3515L15.577 10.6489C27.3033 15.6064 40.1758 17.2774 52.7982 15.4807C65.4206 13.6839 77.311 8.48789 87.1797 0.456346L111.139 29.6179C95.9214 41.9969 77.5899 50.0069 58.1301 52.7803C38.6703 55.5536 18.824 52.9846 0.740974 45.3515Z' />
    </Icon>
  );
};

export default TinyArc;
