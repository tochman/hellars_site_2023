import { Box, Heading, Text, Stack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Pitch = ({ children }) => {
  return (
    <Box
      minWidth={{ lg: "30%" }}
      maxWidth={{ lg: "30%" }}
    >
      {children}
    </Box>
  );
};

const PitchContent = ({ children }) => {
  return (
    <Stack
      bg="gray.100"
      boxShadow={"sm"}
      p={8}
      rounded={"sm"}
      align={"center"}
      pos={"relative"}
    >
      {children}
    </Stack>
  );
};

const PitchHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const PitchText = ({ children }) => {
  return (
    <Text
      fontSize={{ base: "md", lg: "lg" }}
      textAlign={"center"}
      color={"gray.600"}
    >
      {children}
    </Text>
  );
};

const ServicePitch = ({ target, header, content }) => {
  const navigate = useNavigate()
  return (
    <Pitch>
      <PitchContent>
        <PitchHeading>{header}</PitchHeading>
        <PitchText>{content}</PitchText>
        {target ? (
          <Button
            colorScheme="orange"
            onClick={() => {
              navigate(target);
            }}
          >
            Läs mer
          </Button>
        ) : (
          <Text fontWeight={"bold"}>Kommer snart...</Text>
        )}
      </PitchContent>
    </Pitch>
  );
};

export default ServicePitch;
