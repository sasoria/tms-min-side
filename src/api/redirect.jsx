import { baseUrl, loginserviceUrl, minSideProxyUrl } from "../urls";

const redirectToIdPorten = (redirectUrl) => {
  window.location.assign(`${minSideProxyUrl}/login?redirect_uri=${redirectUrl}`);
};

export const redirectToLoginService = () => {
  const redirectUrl = baseUrl + window.location.pathname;
  window.location.assign(`${loginserviceUrl}&redirect=${redirectUrl}`);
};

export default redirectToIdPorten;
