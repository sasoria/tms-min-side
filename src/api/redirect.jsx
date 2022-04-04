import { minSideProxyUrl, minSideUrl } from "../urls";

const redirectToIdPorten = () => {
  window.location.assign(`${minSideProxyUrl}/login?redirect_uri=${minSideUrl}`);
};

export default redirectToIdPorten;
