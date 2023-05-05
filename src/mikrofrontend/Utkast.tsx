import React from "react";
import { useStore } from "@nanostores/react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { utkastBaseUrl, utkastManifestUrl } from "../urls";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import { text } from "../language/text";
import { setParams } from "@navikt/nav-dekoratoren-moduler";
import { useManifest } from "../hooks/useManifest";
import { languageAtom } from "../store/store";

const Utkast = () => {
  const [manifest, isLoadingManifest] = useManifest(utkastManifestUrl);
  const language = useStore(languageAtom);

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

  if (isLoadingManifest) {
    return <ContentLoader />;
  }

  const UtkastMikrofrontend = React.lazy(() => import(`${utkastBaseUrl}/${manifest["src/Mikrofrontend.tsx"]["file"]}`));

  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary>
        <UtkastMikrofrontend />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default Utkast;
