import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import english from '@/translations/en_GB/translation.json'
import romanian from '@/translations/ro_RO/translation.json'

const resources = {
  'en-GB': {
    translation: english,
  },
  'ro-RO': {
    translation: romanian,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      lookupLocalStorage: 'locale',
    },
    resources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
