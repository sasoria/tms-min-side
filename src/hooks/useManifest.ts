import useSWRImmutable from "swr/immutable";
import { fetcher } from "../api/api";
import { setIsError } from "../store/store";

export const useManifest = (manifestUrl: string) => {
  const { data: manifest, isLoading: isLoadingManifest } = useSWRImmutable({ path: manifestUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  return [manifest, isLoadingManifest];
};
