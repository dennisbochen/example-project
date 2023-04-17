import { fetchTranslations } from '~/lib/i18n-next';

type UseHomePageArgs = {
  lng: 'de' | 'en';
};

export const useHomePage = async ({ lng = 'en' }: UseHomePageArgs) => {
  const { t } = await fetchTranslations(lng);

  const messages = {
    headline: t('headline'),
    subline: t('subline'),
    languageSwitch: t('languageSwitch'),
    languageSwitchLabel: t('languageSwitchLabel'),
    languageSwitchHref: t('languageSwitchHref'),
  };

  return { messages };
};
