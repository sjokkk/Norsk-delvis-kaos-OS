import { loggerService } from '@logger'
import { defaultLanguage } from '@shared/config/constant'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Original translation
import enUS from './locales/en-us.json'
import nbNO from './locales/nb-no.json'

const logger = loggerService.withContext('I18N')

const resources = Object.fromEntries(
  [
    ['en-US', enUS],
    ['nb-NO', nbNO]
  ].map(([locale, translation]) => [locale, { translation }])
)

export const getLanguage = () => {
  return localStorage.getItem('language') || navigator.language || defaultLanguage
}

export const getLanguageCode = () => {
  return getLanguage().split('-')[0]
}

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage(),
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false
  },
  saveMissing: true,
  missingKeyHandler: (_1, _2, key) => {
    logger.error(`Missing key: ${key}`)
  }
})

export default i18n
