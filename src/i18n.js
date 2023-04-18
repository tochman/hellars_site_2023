import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { EN } from "./locales/EN";
import { SE } from "./locales/SE";

i18n.use(initReactI18next).init({
  resources: { SE: SE, EN: EN },
  lng: "SE",
  fallbackLng: "SE",
  react: { useSuspense: true },
  interpolation: { escapeValue: false },
});

export default i18n;
