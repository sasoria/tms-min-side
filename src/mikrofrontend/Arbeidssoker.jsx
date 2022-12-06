import React from "react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { arbeidsflateForInnlogetArbeidssokerUrl } from "../urls";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import useStore, { selectIsError, selectLanguage } from "../store/store";
import { text } from "../language/text";
import Layout from "../components/layout/Layout";

const ArbeidsflateForInnloggetArbeidssoker = React.lazy(() => import(arbeidsflateForInnlogetArbeidssokerUrl));

const Arbeidssoker = () => {
  const language = useStore(selectLanguage);
  const isError = useStore(selectIsError);

  useBreadcrumbs([
    {
      url: `/minside/arbeidssoker`,
      title: text.arbeidssoker[language],
      handleInApp: true,
    },
  ]);

  return (
    <Layout isError={isError}>
      <React.Suspense fallback={<ContentLoader />}>
        <ErrorBoundary>
          <ArbeidsflateForInnloggetArbeidssoker />
        </ErrorBoundary>
      </React.Suspense>
    </Layout>
  );
};

export default Arbeidssoker;
