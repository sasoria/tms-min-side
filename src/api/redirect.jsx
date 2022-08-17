import { loginserviceUrl, minSideProxyUrl, minSideUrl } from "../urls";

const redirectToIdPorten = (redirectUrl) => {
  window.location.assign(`${minSideProxyUrl}/login?redirect_uri=${redirectUrl}`);
};

export const redirectToLoginService = () => {
  window.location.assign(`${loginserviceUrl}&redirect=${minSideUrl}`);
};

export default redirectToIdPorten;
