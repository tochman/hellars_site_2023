import { useTranslation } from "react-i18next";
import Logo from "./logos/Logo";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box bg={"#FAF6F3"} color={"gray.700"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={10}
        >
          <Stack spacing={4}>
            <Box>
              <Logo />
            </Box>
            <Stack align={"flex-start"} paddingLeft={"20px"}>
              <Text fontSize={"xs"} sx={{ lineHeight: "10px !important" }}>
                Engelbrektsgatan 7A
              </Text>
              <Text fontSize={"xs"} sx={{ lineHeight: "10px !important" }}>
                411 27 Göteborg
              </Text>
              <Text fontSize={"xs"} sx={{ lineHeight: "10px !important" }}>
                031 – 12 08 85
              </Text>
              <Text fontSize={"xs"} sx={{ lineHeight: "10px !important" }}>
                031 – 12 08 86
              </Text>
              <Text fontSize={"xs"} sx={{ lineHeight: "10px !important" }}>
                office@hellars.com
              </Text>
              <Text fontSize={"xs"} sx={{ lineHeight: "10px !important" }}>
                Mån – Fre . 7.00 – 18.00
              </Text>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>{t("uiElements.services")}</ListHeader>
            <Link href={"/legal"}>{t("legal.heading")}</Link>
            <Link href={"/accounting"}>{t("accounting.heading")}</Link>
            <Link href={"/management"}>{t("management.heading")}</Link>
            <Link href={"/digital"}>{t("digital.heading")}</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>{t("uiElements.company")}</ListHeader>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Partners</Link>
            <Link href={"#"}>{t("uiElements.team")}</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>{t("uiElements.team")}</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
