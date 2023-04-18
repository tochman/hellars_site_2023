import { Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PageComponent from "../components/PageComponent";
import Hero from "../components/Hero";

const ManagementServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        heading={t("management.heading")}
        subHeading={t("management.subHeading")}
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <PageComponent>
        <Heading>{t("management.heading")}</Heading>
        <Text>{t('management.pitch')}</Text>
      </PageComponent>
    </>
  );
};

export default ManagementServices;
