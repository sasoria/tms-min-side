import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { onBreadcrumbClick, setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import { useNavigate } from "react-router";
import { text } from "../language/text";
import { Locale } from "./useLanguage";
import { languageAtom } from "../store/store";

type Breadcrumb = {
  url: string;
  title: string;
  handleInApp?: boolean;
};

export const useBreadcrumbs = (breadcrumb: Breadcrumb[]) => {
  const language: Locale = useStore(languageAtom);
  const navigate = useNavigate();

  onBreadcrumbClick((breadcrumb) => {
    navigate(breadcrumb.url);
  });

  useEffect(() => {
    const baseBreadcrumbs: Breadcrumb[] = [
      {
        url: "/minside",
        title: text.minSide[language],
        handleInApp: false,
      },
    ];

    const breadcrumbs = baseBreadcrumbs.concat(breadcrumb);
    setBreadcrumbs(breadcrumbs);
  }, [language]);
};
