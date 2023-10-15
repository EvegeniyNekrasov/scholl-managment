import { initReactI18next } from 'react-i18next'

import translationEnglish from 'common/language/locales/en.json'
import translationSpanish from 'common/language/locales/es.json'
import i18next from 'i18next'

const resources = {
  en: { translation: translationEnglish },
  es: { translation: translationSpanish }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'es'
})

export default i18next
