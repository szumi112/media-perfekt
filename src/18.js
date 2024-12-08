import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../public/locales/en.json";
import pl from "../public/locales/pl.json";

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: pl },
    en: { translation: en },
  },
  lng: "pl",
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
