import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Texts
import { russianText } from './russian';
import { englishText } from './english';

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: englishText
    },
    ru: {
      translation: russianText
    }
  }
});
