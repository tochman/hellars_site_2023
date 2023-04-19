import { Heading, Text, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PageComponent from "../components/PageComponent";
import Hero from "../components/Hero";
import ServicePitch from "../components/ServicePitch";

const MainView = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero heading={t("mainView.subHeading")}/>
      <PageComponent>
        <Heading as={"h1"}>{t("landing")}</Heading>
        <Heading as={"h2"} fontSize={"xl"}>
          {t("mainView.heading")}
        </Heading>
        <Text>{t("mainView.pitch")}</Text>
        <Flex direction={'row'}>
          <ServicePitch target={'/legal'} header={t('legal.heading')} content={t('legal.subHeading')}/>
        </Flex>
      </PageComponent>
    </>
  );
};

export default MainView;
