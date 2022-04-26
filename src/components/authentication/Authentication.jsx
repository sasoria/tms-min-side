import React from "react";
import { useQuery } from "react-query";
import redirectToIdPorten, { redirectToLoginService } from "../../api/redirect";
import { authenticationUrl, minSideProxyUrl } from "../../urls";
import { fetcher } from "../../api/api";
import ContentLoader from "../loader/ContentLoader";

const Authentication = ({ children }) => {
  const { data: status, isLoading, isError } = useQuery(`${minSideProxyUrl}/login/status`, fetcher);
  const { data: legacyStatus, isLoadingLegacyStatus } = useQuery(authenticationUrl, fetcher, {
    onError: async (error) => {
      if (error.request.status === 401 && !isLoading) {
        redirectToLoginService();
      }
    },
  });

  if (isLoading || isLoadingLegacyStatus) {
    return <ContentLoader size="2xlarge">...</ContentLoader>;
  }

  if (!status?.authenticated || isError) {
    redirectToIdPorten();
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
