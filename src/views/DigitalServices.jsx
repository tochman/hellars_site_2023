import { Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PageComponent from "../components/PageComponent";
import Hero from "../components/Hero";

const DigitalServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        heading={t("digital.heading")}
        subHeading={t("digital.subHeading")}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <PageComponent>
        <Heading>{t("digital.heading")}</Heading>
        <Text>{t('digital.pitch')}</Text>
      </PageComponent>
    </>
  );
}

export default DigitalServices