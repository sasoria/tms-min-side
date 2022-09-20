import React from "react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { minSideTjenesterUrl, minSideOversiktUrl } from "../urls";
import { arbeidsflateForInnlogetArbeidssokerUrl, arbeidssokerUrl } from "../urls";
import useStore, { selectSetIsError } from "../store/store";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import { useQuery } from "react-query";
import { fetcher } from "../api/api";

const MinSideTjenester = React.lazy(() => import(minSideTjenesterUrl));
const ArbeidsflateForInnlogetArbeidssoker = React.lazy(() => import(arbeidsflateForInnlogetArbeidssokerUrl));
const MinSideOversikt = React.lazy(() => import(minSideOversiktUrl));

const MinSide = () => {
  const { data } = useQuery(arbeidssokerUrl, fetcher, { onError: useStore(selectSetIsError) });
  useBreadcrumbs();

  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary>
        <MinSideOversikt />
      </ErrorBoundary>
      {data?.erArbeidssoker ? (
        <ErrorBoundary>
          <ArbeidsflateForInnlogetArbeidssoker />
        </ErrorBoundary>
      ) : null}
      <ErrorBoundary>
        <MinSideTjenester />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default MinSide;
