import { Heading, Text, Box, Stack, Container } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PageComponent from "../components/PageComponent";
import Hero from "../components/Hero";
import ServicePitch from "../components/ServicePitch";

const MainView = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero heading={t("mainView.subHeading")} />
      <PageComponent>
        <Heading as={"h1"}>{t("mainView.heading")}</Heading>
        <Heading as={"h2"} fontSize={"xl"}>
          {t("mainView.subHeading")}
        </Heading>
        <Text>{t("mainView.pitch")}</Text>

        <Box bg={"white"}>
          <Container maxW={"7xl"} pt={16} pb={24} as={Stack} spacing={12}>
            <Stack spacing={0} align={"center"}>
              <Heading>{t("pitch.heading")}</Heading>
              <Text fontSize={{ base: "lg", lg: "xl" }}>
                {t("pitch.subHeading")}
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row", md: "row" }}
              spacing={{ base: 10, sm: 1, md: 4, lg: 10 }}
            >
              <ServicePitch
                target={"/legal"}
                header={t("legal.heading")}
                content={t("legal.subHeading")}
              />
              <ServicePitch
                target={"/accounting"}
                header={t("accounting.heading")}
                content={t("accounting.subHeading")}
              />
              <ServicePitch
                target={"/management"}
                header={t("management.heading")}
                content={t("management.subHeading")}
              />
            </Stack>

            <Stack
              direction={{ base: "column", sm: "row", md: "row" }}
              spacing={{ base: 10, sm: 1, md: 4, lg: 10 }}
            >
              <ServicePitch
                target={"/legal"}
                header={t("legal.heading")}
                content={t("legal.subHeading")}
              />
              <ServicePitch
                target={"/accounting"}
                header={t("accounting.heading")}
                content={t("accounting.subHeading")}
              />
            </Stack>
          </Container>
        </Box>
      </PageComponent>
    </>
  );
};

export default MainView;
