import React from "react";
import { useQuery } from "react-query";
import redirectToIdPorten from "../../api/redirect";
import { minSideProxyUrl } from "../../urls";
import { fetcher } from "../../api/api";

const Authentication = ({ children }) => {
  const { data: status, isLoading, isError } = useQuery(`${minSideProxyUrl}/login/status`, fetcher);

  if (isLoading) {
    return <div>Logger inn...</div>;
  }

  if (!status?.authenticated || isError) {
    redirectToIdPorten();
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
