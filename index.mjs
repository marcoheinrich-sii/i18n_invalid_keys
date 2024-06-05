import { createI18N } from "./i18n.mjs";

const language = "en";
const country = "GB";

const i18nInstance = await createI18N(language, country);
const localizedValue = i18nInstance.t("fa.next-best-action.add.vin.non.connect.vehicle.connect.market.content");

console.log(localizedValue);
