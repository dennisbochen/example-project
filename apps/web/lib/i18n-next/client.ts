'use client';

import i18next from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getConfig } from './config';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      async (lng: string, namespace: string) =>
        await import(`./locales/${lng}/${namespace}.json`)
    )
  )
  .init(getConfig());

export function useTranslation(
  lng: string,
  ns?: string,
  options: { keyPrefix?: string } = {}
) {
  if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng);
  return useTranslationOrg(ns, options);
}
