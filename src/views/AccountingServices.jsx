import { Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PageComponent from "../components/PageComponent";
import Hero from "../components/Hero";

const AccountingServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        heading={t("accounting.heading")}
        subHeading={t("accounting.subHeading")}
        image="https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80"
      />
      <PageComponent>
        <Heading>{t("accounting.heading")}</Heading>
        <Text>{t('accounting.pitch')}</Text>
      </PageComponent>
    </>
  );
};

export default AccountingServices;
