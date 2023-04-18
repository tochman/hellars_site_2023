import { Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PageComponent from "../components/PageComponent";
import Hero from "../components/Hero";

const LegalServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        heading={t("legal.heading")}
        subHeading={t("legal.subHeading")}
        image="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <PageComponent>
        <Heading>{t("legal.heading")}</Heading>
        <Text>{t('legal.pitch')}</Text>
      </PageComponent>
    </>
  );
};

export default LegalServices;
