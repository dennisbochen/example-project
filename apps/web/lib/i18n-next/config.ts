const fallbackLng = 'en';
const languages = [fallbackLng, 'de'];
const defaultNS = 'default';

export function getConfig(lng = fallbackLng, ns = defaultNS) {
  return {
    debug: false,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
