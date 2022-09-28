import { Icon } from "@chakra-ui/icons";

const Arrow = ({ transform, mt, mr, ml, position, width, height, fill }) => {
  return (
    <Icon
      viewBox='0 0 45 38'
      transform={transform}
      mt={mt}
      position={position}
      width={width}
      height={height}
      fill={fill}
      mr={mr}
      ml={ml}
    >
      <path d='M19.818 7.18232L26.182 0.818359L44.364 19.0003L26.182 37.1823L19.818 30.8184L27.136 23.5003H0V14.5003H27.136L19.818 7.18232Z' />
    </Icon>
  );
};

export default Arrow;
