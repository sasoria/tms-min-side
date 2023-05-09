import React from "react";
import { useStore } from "@nanostores/react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { aiaBaseCdnUrl, aiaManifestUrl } from "../urls";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import { text } from "../language/text";
import Layout from "../components/layout/Layout";
import { aiaEntry, bundle } from "./entrypoints";
import { isErrorAtom, languageAtom } from "../store/store";
import { useManifest } from "../hooks/useManifest";

const Arbeidssoker = () => {
  const [manifest, isLoading] = useManifest(aiaManifestUrl);
  const isError = useStore(isErrorAtom);
  const language = useStore(languageAtom);

  useBreadcrumbs([
    {
      url: `/minside/arbeidssoker`,
      title: text.arbeidssoker[language],
      handleInApp: true,
    },
  ]);

  if (isLoading) {
    return <ContentLoader />;
  }

  const ArbeidsflateForInnloggetArbeidssoker = React.lazy(
    () => import(`${aiaBaseCdnUrl}/${manifest[aiaEntry][bundle]}`)
  );

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
