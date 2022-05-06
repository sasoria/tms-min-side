import React from "react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { minSideVarslingerUrl } from "../urls";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import useStore, { selectLanguage } from "../store/store";
import { text } from "../language/text";

const Varslinger = React.lazy(() => import(minSideVarslingerUrl));

const MinSideVarslinger = () => {
  const language = useStore(selectLanguage);

  useBreadcrumbs([
    {
      url: `/minside/varslinger`,
      title: text.minSideVarslinger[language],
      handleInApp: true,
    },
  ]);

  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary>
        <Varslinger />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default MinSideVarslinger;
