import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocale from "./locale/enLocale.json"
import ruLocale from "./locale/ruLocale.json"

const resources = {
    en: enLocale,
    ru: ruLocale
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({ resources, fallbackLng: 'en', lng: "ru", interpolation: { escapeValue: false } })

export default i18n;