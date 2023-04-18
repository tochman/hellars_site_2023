import { Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PageComponent from "../components/PageComponent";
import Hero from "../components/Hero";

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
      </PageComponent>
    </>
  );
};

export default MainView;
