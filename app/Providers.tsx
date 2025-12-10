"use client";

import { I18nextProvider } from 'react-i18next'
import i18n from '@/i18n/config'
import { useEffect, type ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {

  useEffect(() => {
    const dir = i18n.language === 'fa' || i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = i18n.language
  }, [])

  i18n.on('languageChanged', (lng) => {
    const dir = lng === 'fa' || lng === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = lng
  })

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}