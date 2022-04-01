import { minSideProxyUrl } from "../urls";

const redirectToIdPorten = () => {
  window.location.assign(`${minSideProxyUrl}/login?redirect_uri=https://www.dev.nav.no/minside`);
};

export default redirectToIdPorten;
