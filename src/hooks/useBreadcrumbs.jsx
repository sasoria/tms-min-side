import { useEffect } from "react";
import { onBreadcrumbClick, setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import useStore, { selectLanguage } from "../store/store";
import { useNavigate } from "react-router";
import { text } from "../language/text";
import { dittnavUrl } from "../urls";

export const useBreadcrumbs = (breadcrumb = []) => {
  const language = useStore(selectLanguage);
  const navigate = useNavigate();

  onBreadcrumbClick((breadcrumb) => {
    navigate(breadcrumb.url);
  });

  useEffect(() => {
    const baseBreadcrumbs = [
      {
        url: dittnavUrl,
        title: text.minSide[language],
        handleInApp: true,
      },
    ];

    const breadcrumbs = baseBreadcrumbs.concat(breadcrumb);
    setBreadcrumbs(breadcrumbs);
  }, [language]);
};
