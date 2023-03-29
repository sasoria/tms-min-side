import { onLanguageSelect, setAvailableLanguages, setParams, Params } from "@navikt/nav-dekoratoren-moduler";
import { useEffect } from "react";
import useStore, { selectSetLanguage, selectLanguage } from "../store/store";
import { baseUrlWithLanguage } from "../urls";

const setDocumentLanguage = (language) => {
  window.sessionStorage.setItem("language", language);
  window.dispatchEvent(new Event("language"));
  document.documentElement.lang = language;
};

const updateState = (newLanguage, currentLanguage) => {
  const replacementUrl = window.location.href.replace(
    baseUrlWithLanguage[currentLanguage],
    baseUrlWithLanguage[newLanguage]
  );
  window.history.replaceState(window.history.state, "", replacementUrl);
};

export const useLanguage = () => {
  const setLanguage = useStore(selectSetLanguage);
  const currentLanguage = useStore(selectLanguage);

  onLanguageSelect((language) => {
    updateState(language.locale, currentLanguage);
    setLanguage(language.locale);
    setDocumentLanguage(language.locale);
  });

  useEffect(() => {
    setParams({ ...Params, language: currentLanguage });
    setDocumentLanguage(currentLanguage);
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
