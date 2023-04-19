import {
  Stack,
  Flex,
  Button,
  Text,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Hero = ({ heading, subHeading, image }) => {
  const url = image || "https://hellars.se/wp-content/uploads/2021/11/4.jpg";
  return (
    <Flex
      mt={"110px"}
      w={"full"}
      h={"80vh"}
      backgroundImage={`url(${url})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading
            as={"h1"}
            fontSize={"4xl"}
            color={"white !important;"}
          >
            {heading}
          </Heading>
          <Heading
            as={"h2"}
            fontSize={"2xl"}
            color={"white !important"}
            sx={{ lineHeight: "28px !important" }}
          >
            {subHeading}
          </Heading>
          {/* <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button>
          </Stack> */}
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
