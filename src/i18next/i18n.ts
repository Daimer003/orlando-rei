import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      description: "This is a multilingual site.",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      description: "Este es un sitio multilingüe.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Idioma predeterminado
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React ya se encarga de escapar
  },
});

export default i18n;