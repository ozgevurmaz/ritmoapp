import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

import en from "./locales/en.json";
import tr from "./locales/tr.json";

const translations = { en, tr };

export type SupportedLocale = keyof typeof translations; // "en" | "tr"

export const i18n = new I18n(translations);

const deviceLang = getLocales()[0]?.languageCode as SupportedLocale | undefined;
i18n.locale = deviceLang ?? "en";

i18n.enableFallback = true;

export const t = (key: string, options?: Record<string, unknown>) =>
  i18n.t(key, options);
