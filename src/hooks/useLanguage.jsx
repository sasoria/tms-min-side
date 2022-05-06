import { onLanguageSelect, setAvailableLanguages } from "@navikt/nav-dekoratoren-moduler";
import { useEffect } from "react";
import useStore, { selectSetLanguage } from "../store/store";

export const useLanguage = () => {
  const setLanguage = useStore(selectSetLanguage);

  onLanguageSelect((language) => {
    setLanguage(language.locale);
  });

  useEffect(() => {
    setAvailableLanguages([
      {
        locale: "nb",
        handleInApp: true,
      },
      {
        locale: "en",
        handleInApp: true,
      },
    ]);
  }, []);
};
