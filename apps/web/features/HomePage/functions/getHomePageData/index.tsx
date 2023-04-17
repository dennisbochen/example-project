import { getStarWarsConsoleData } from '~/features/StarWarsConsole';
import { fetchTranslations } from '~/lib/i18n-next';

type GetHomePageDataArgs = {
  lng: 'de' | 'en';
};

export const getHomePageData = async ({ lng = 'en' }: GetHomePageDataArgs) => {
  const { t } = await fetchTranslations(lng);
  const starWarsConsoleData = await getStarWarsConsoleData();

  const messages = {
    headline: t('headline'),
    subline: t('subline'),
    languageSwitch: t('languageSwitch'),
    languageSwitchLabel: t('languageSwitchLabel'),
    languageSwitchHref: t('languageSwitchHref'),
    restApiLinkLabel: t('restApiLinkLabel'),
    graphqlApiLinkLabel: t('graphqlApiLinkLabel'),
  };

  return { messages, starWarsConsoleData };
};
