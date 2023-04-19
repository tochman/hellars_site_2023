import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ServicePitch = ({ target, header, content }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        width={{ lg: "33%" }}
        onClick={() => navigate(target)}
        sx={{ cursor: "pointer" }}
      >
        <Stack
          bg={"lightgrey"}
          boxShadow={"sm"}
          p={8}
          rounded={"lg"}
          align={"center"}
          pos={"relative"}
        >
          <Heading as={"h3"} fontSize={"xl"}>
            {header}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            textAlign={"center"}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {content}
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default ServicePitch;
