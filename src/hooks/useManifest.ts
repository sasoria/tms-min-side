import { useQuery } from "react-query";
import { manifestFetcher } from "../api/api";
import { setIsError } from "../store/store";

export const useManifest = (manifestUrl: string) => {
  const { data: manifest, isLoading: isLoadingManifest } = useQuery(manifestUrl, manifestFetcher, {
    onError: setIsError,
  });

  return [manifest, isLoadingManifest];
};
