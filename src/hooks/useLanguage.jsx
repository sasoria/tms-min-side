import { onLanguageSelect, setAvailableLanguages, setParams, Params } from "@navikt/nav-dekoratoren-moduler";
import { useEffect } from "react";
import useStore, { selectSetLanguage, selectLanguage } from "../store/store";
import { baseUrl } from "../urls";

const baseUrlLocale = {
  nb: `${baseUrl}/minside`,
  en: `${baseUrl}/minside/en`,
  nn: `${baseUrl}/minside/nn`,
};

const setInitialLocale = (setLanguage, currentHref) => {
  if (currentHref.includes(baseUrlLocale.en)) {
    setLanguage("en");
    setParams({ ...Params, language: "en" });
    window.sessionStorage.setItem("language", "en");
    window.dispatchEvent(new Event("language"));
    document.documentElement.lang = "en";
  } else if (currentHref.includes(baseUrlLocale.nn)) {
    setLanguage("nn");
    setParams({ ...Params, language: "nn" });
    window.sessionStorage.setItem("language", "nn");
    window.dispatchEvent(new Event("language"));
    document.documentElement.lang = "nn";
  } else {
    setLanguage("nb");
    setParams({ ...Params, language: "nb" });
    window.sessionStorage.setItem("language", "nb");
    window.dispatchEvent(new Event("language"));
    document.documentElement.lang = "nb";
  }
};

const updateState = (newLocale, currentLocale) => {
  const replacementUrl = window.location.href.replace(baseUrlLocale[currentLocale], baseUrlLocale[newLocale]);

  window.history.replaceState(window.history.state, "", replacementUrl);
};

export const useLanguage = () => {
  const setLanguage = useStore(selectSetLanguage);
  const currentLocale = useStore(selectLanguage);

  onLanguageSelect((language) => {
    setLanguage(language.locale);
    updateState(language.locale, currentLocale);
    window.sessionStorage.setItem("language", language.locale);
    window.dispatchEvent(new Event("language"));
    document.documentElement.lang = language.locale;
  });

  useEffect(() => {
    setInitialLocale(setLanguage, window.location.href.toLocaleLowerCase());
    setAvailableLanguages([
      {
        locale: "nb",
        handleInApp: true,
      },
      {
        locale: "en",
        handleInApp: true,
      },
      {
        locale: "nn",
        handleInApp: true,
      },
    ]);
  }, []);
};
