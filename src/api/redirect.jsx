import { loginserviceUrl, minSideProxyUrl, minSideUrl } from "../urls";

const redirectToIdPorten = () => {
  window.location.assign(`${minSideProxyUrl}/login?redirect_uri=${minSideUrl}`);
};

export const redirectToLoginService = () => {
  window.location.assign(`${loginserviceUrl}&redirect=${minSideUrl}`);
};

export default redirectToIdPorten;
