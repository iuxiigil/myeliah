import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import AppLocale from "../data/config/translation";

export default function AppProvider({ children }) {
  const { locale } = useSelector((state) => state.LanguageSwitcher.language);
  // console.log(locale);
  const currentAppLocale = AppLocale[locale];
  // console.log(currentAppLocale);
  return (
    <IntlProvider locale={"en"} messages={currentAppLocale.messages}>
      {children}
    </IntlProvider>
  );
}
