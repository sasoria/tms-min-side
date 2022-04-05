import React from "react";
import { useQuery } from "react-query";
import redirectToIdPorten, { redirectToLoginService } from "../../api/redirect";
import { innloggingsstatusUrl, minSideProxyUrl } from "../../urls";
import { fetcher } from "../../api/api";

const Authentication = ({ children }) => {
  const { data: status, isLoading, isError } = useQuery(`${minSideProxyUrl}/login/status`, fetcher);
  const { data: innloggingsstatus, isLoadingInnloggingsstatus } = useQuery(innloggingsstatusUrl, fetcher);

  if (isLoading || isLoadingInnloggingsstatus) {
    return <div>Logger inn...</div>;
  }

  if (!status?.authenticated || isError) {
    redirectToIdPorten();
    return null;
  }

  if (innloggingsstatus?.authenticated === false && status?.authenticated === true) {
    redirectToLoginService();
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
