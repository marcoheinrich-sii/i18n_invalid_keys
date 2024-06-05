import { createInstance } from "i18next";
import HttpBackend from "i18next-http-backend";
import ChainedBackend from "i18next-chained-backend";
import FSBackend from "i18next-fs-backend";

const MINUTES = 60 * 1000;
const RELOAD_INTERVAL = 30 * MINUTES;

const initInstance = () => {
  const instance = createInstance();

  instance.use(ChainedBackend).init({
    debug: true,

    fallbackLng: "en_GB",
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    keySeparator: ".",
    backend: {
      backends: [FSBackend, HttpBackend],
      backendOptions: [
        {
          expirationTime: RELOAD_INTERVAL,
          loadPath: "./locales_cache/{{lng}}.json",
          addPath: "./locales_cache/{{lng}}.json",
        },
        {
          loadPath([lng]) {
            if (lng.indexOf("_") < 0) {
              return undefined;
            }

            const [language, country] = lng.split("_");

            const loadPath = `https://web-api.audi.com/i18n/v1/${country.toLowerCase()}/${language}`;

            return loadPath;
          },
        },
      ],
    },
  });
  return instance;
};

const instances = new Map();

export const createI18N = async (language, country) => {
  const i18nLang = `${language}_${country.toUpperCase()}`;

  if (instances.has(i18nLang)) {
    return instances.get(i18nLang);
  }
  const instance = initInstance();
  await instance.changeLanguage(i18nLang);

  instances.set(i18nLang, instance);

  return instance;
};
