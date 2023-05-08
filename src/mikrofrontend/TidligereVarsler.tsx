import React from "react";
import { useStore } from "@nanostores/react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { tidligereVarslerBaseUrl, tidligereVarslerManifestUrl } from "../urls";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import { text } from "../language/text";
import Layout from "../components/layout/Layout";
import { useManifest } from "../hooks/useManifest";
import { isErrorAtom, languageAtom } from "../store/store";

const TidligereVarsler = () => {
  const [manifest, isLoadingManifest] = useManifest(tidligereVarslerManifestUrl);

  const isError = useStore(isErrorAtom);
  const language = useStore(languageAtom);

  useBreadcrumbs([
    {
      url: `/minside/tidligere-varsler`,
      title: text.tidligereVarslinger[language],
      handleInApp: true,
    },
  ]);

  if (isLoadingManifest) {
    return <ContentLoader />;
  }

  const TidligereVarslerMikrofrotend = React.lazy(
    () => import(`${tidligereVarslerBaseUrl}/${manifest["src/Mikrofrontend.jsx"]["file"]}`)
  );

  return (
    <Layout isError={isError}>
      <React.Suspense fallback={<ContentLoader />}>
        <ErrorBoundary>
          <TidligereVarslerMikrofrotend />
        </ErrorBoundary>
      </React.Suspense>
    </Layout>
  );
};

export default TidligereVarsler;
