import React, { useEffect } from "react";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import {
  minSideTjenesterUrl,
  minSideOversiktUrl,
  arbeidsflateForInnlogetArbeidssokerUrl,
  oppfolgingUrl,
} from "../urls";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import { useQuery } from "react-query";
import { fetcher } from "../api/api";
import useStore, { selectSetIsError } from "../store/store";

const MinSideTjenester = React.lazy(() => import(minSideTjenesterUrl));
const ArbeidsflateForInnlogetArbeidssoker = React.lazy(() => import(arbeidsflateForInnlogetArbeidssokerUrl));
const MinSideOversikt = React.lazy(() => import(minSideOversiktUrl));

const MinSide = () => {
  const { data: isUnderOppfolging, isError: isOppfolgingError } = useQuery(oppfolgingUrl, fetcher);
  const setIsError = useStore(selectSetIsError);
  useBreadcrumbs();

  if (isOppfolgingError) {
    setIsError();
  }

  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary>
        <MinSideOversikt />
      </ErrorBoundary>
      {isUnderOppfolging ? (
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
