import useSWRImmutable from "swr/immutable";
import { manifestFetcher } from "../api/api";
import { setIsError } from "../store/store";

export const useManifest = (manifestUrl: string) => {
  const { data: manifest, isLoading: isLoadingManifest } = useSWRImmutable(manifestUrl, manifestFetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  return [manifest, isLoadingManifest];
};
