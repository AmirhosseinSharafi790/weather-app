import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from '@/public/locales/en/common.json'
import commonFa from '@/public/locales/fa/common.json'
import commonAr from '@/public/locales/ar/common.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: commonEn },
      fa: { common: commonFa },
      ar: { common: commonAr },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    }
  })

export default i18n