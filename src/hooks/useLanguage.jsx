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
  console.log("initiell langugae");

  if (currentHref.includes(baseUrlLocale.en)) {
    setLanguage("en");
    setParams({ ...Params, language: "en" });
    console.log("locale - en ");
  } else if (currentHref.includes(baseUrlLocale.nn)) {
    setLanguage("nn");
    setParams({ ...Params, language: "nn" });
    console.log("locale - nn ");
  } else {
    setLanguage("nb");
    setParams({ ...Params, language: "nb" });
    console.log("locale - nb ");
  }
};

const updateState = (locale) => {
  window.history.replaceState(window.history.state, "", baseUrlLocale[locale]);
};

export const useLanguage = () => {
  const setLanguage = useStore(selectSetLanguage);

  onLanguageSelect((language) => {
    setLanguage(language.locale);
    updateState(language.locale);
  });

  useEffect(() => {
    setInitialLocale(setLanguage, window.location.href);
    setAvailableLanguages([
      {
        locale: "nb",
        handleInApp: true,
      },
      {
        locale: "nn",
        handleInApp: true,
      },
      {
        locale: "en",
        handleInApp: true,
      },
    ]);
  }, []);
};
