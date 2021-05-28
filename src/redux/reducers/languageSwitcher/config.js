// import language from "../../pages/config/translation/language.config";
let language = "chinese";
const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: "en",
      locale: "en",
      text: "English",
    },
    {
      languageId: "tw",
      locale: "tw",
      text: "Chinese",
    },
    {
      languageId: "cn",
      locale: "cn",
      text: "simple",
    },
    {
      languageId: "jp",
      locale: "jp",
      text: "japan",
    },
    {
      languageId: "ke",
      locale: "ke",
      text: "jorea",
    },
    {
      languageId: "french",
      locale: "fr",
      text: "French",
    },
    {
      languageId: "italian",
      locale: "it",
      text: "Italian",
    },
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach((language) => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
