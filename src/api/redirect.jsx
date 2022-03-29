import { minSideProxyUrl } from "../urls";

const redirectToIdPorten = () => {
  window.location.assign(`${minSideProxyUrl}/login?redirect_uri=https://person.dev.nav.no/tms-min-side`);
};

export default redirectToIdPorten;
