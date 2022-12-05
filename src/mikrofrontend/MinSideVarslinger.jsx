import React from "react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { minSideVarslingerUrl } from "../urls";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import useStore, { selectIsError, selectLanguage } from "../store/store";
import { text } from "../language/text";
import Layout from "../components/layout/Layout";

const Varslinger = React.lazy(() => import(minSideVarslingerUrl));

const MinSideVarslinger = () => {
  const language = useStore(selectLanguage);
  const isError = useStore(selectIsError);

  useBreadcrumbs([
    {
      url: `/minside/varslinger`,
      title: text.minSideVarslinger[language],
      handleInApp: true,
    },
  ]);

  return (
    <Layout isError={isError}>
      <React.Suspense fallback={<ContentLoader />}>
        <ErrorBoundary>
          <Varslinger />
        </ErrorBoundary>
      </React.Suspense>
    </Layout>
  );
};

export default MinSideVarslinger;
