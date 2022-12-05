import React from "react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { utkastUrl } from "../urls";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import useStore, { selectLanguage } from "../store/store";
import { text } from "../language/text";
import { getEnvironment } from "../api/environment";
import { setParams } from "@navikt/nav-dekoratoren-moduler";

const UtkastMikrofrontend = React.lazy(() => import(utkastUrl));

const Utkast = () => {
  const language = useStore(selectLanguage);

  useBreadcrumbs([
    {
      url: `/minside/utkast`,
      title: text.utkast[language],
      handleInApp: true,
    },
  ]);

  setParams({
    utilsBackground: "white",
  });

  if (getEnvironment() === "production") {
    return null;
  }

  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary>
        <UtkastMikrofrontend />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Utkast;
