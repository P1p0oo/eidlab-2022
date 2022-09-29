import { ListItem } from "@chakra-ui/react";

const ServiceTitle = ({
  title,
  setSelectedService,
  select,
  selectedService,
}) => {
  return (
    <ListItem
      transitionDuration={"0.25s"}
      fontSize={selectedService == select ? "4xl" : "2xl"}
      color={selectedService == select ? "brand.secondary" : "brand.bodyInvert"}
      cursor={"pointer"}
      mt={4}
      onMouseEnter={() => {
        setSelectedService(select);
      }}
    >
      {title}
    </ListItem>
  );
};

export default ServiceTitle;
