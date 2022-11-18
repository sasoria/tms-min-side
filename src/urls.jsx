import { getEnvironment } from "./api/environment";

const MIN_SIDE_URL = {
  local: "http://localhost:3000/minside",
  development: "https://www.dev.nav.no/minside",
  production: "https://www.nav.no/minside",
};

const MIN_SIDE_PROXY_URL = {
  local: "http://localhost:3000/tms-min-side-proxy",
  development: "https://www.dev.nav.no/tms-min-side-proxy",
  production: "https://www.nav.no/tms-min-side-proxy",
};

const BASE_URL = {
  local: "http://localhost:3000",
  development: "https://www.dev.nav.no",
  production: "https://www.nav.no",
};

const LEGACY_AUTHENTICATION_URL = {
  local: "http://localhost:3000/dittnav-api/authPing",
  development: "https://www.dev.nav.no/dittnav-api/authPing",
  production: "https://www.nav.no/dittnav-api/authPing",
};

const MIN_SIDE_VARSLINGER = {
  local: "http://localhost:3000/tms-min-side-varslinger/bundle.js",
  development: "https://cdn.dev.nav.no/min-side/tms-min-side-varslinger/tms-min-side-varslinger.js",
  production: "https://cdn.nav.no/min-side/tms-min-side-varslinger/tms-min-side-varslinger.js",
};

const MIN_SIDE_OVERSIKT = {
  local: "http://localhost:3000/tms-min-side-oversikt/bundle.js",
  development: "https://person.dev.nav.no/tms-min-side-oversikt/bundle.js",
  production: "https://www.nav.no/tms-min-side-oversikt/bundle.js",
};

const MIN_SIDE_TJENESTER = {
  local: "http://localhost:3000/tms-min-side-tjenester/bundle.js",
  development: "https://person.dev.nav.no/tms-min-side-tjenester/bundle.js",
  production: "https://www.nav.no/tms-min-side-tjenester/bundle.js",
};

const ARBEIDSFLATE_FOR_INNLOGGET_ARBERDSSOKER_URL = {
  local: "http://localhost:3000/aia/bundle.js",
  development: "https://veientilarbeid.dev.nav.no/esm/bundle.js",
  production: "https://veientilarbeid.nav.no/esm/bundle.js",
};

const LOGINSERVICE_URL = {
  local: "http://localhost:3000/loginservice",
  development: "https://loginservice.dev.nav.no/login?level=Level3",
  production: "https://loginservice.nav.no/login?level=Level3",
};

const ARBEIDSSOKER_URL = {
  local: "http://localhost:3000/dittnav-api/arbeidssoker",
  development: "https://www.dev.nav.no/aia-backend/er-arbeidssoker",
  production: "https://www.nav.no/aia-backend/er-arbeidssoker",
};

export const minSideUrl = MIN_SIDE_URL[getEnvironment()];
export const minSideOversiktUrl = MIN_SIDE_OVERSIKT[getEnvironment()];
export const arbeidsflateForInnlogetArbeidssokerUrl = ARBEIDSFLATE_FOR_INNLOGGET_ARBERDSSOKER_URL[getEnvironment()];
export const minSideTjenesterUrl = MIN_SIDE_TJENESTER[getEnvironment()];
export const minSideVarslingerUrl = MIN_SIDE_VARSLINGER[getEnvironment()];
export const minSideProxyUrl = MIN_SIDE_PROXY_URL[getEnvironment()];
export const authenticationUrl = `${MIN_SIDE_PROXY_URL[getEnvironment()]}/login/status`;
export const legacyAuthenticationUrl = LEGACY_AUTHENTICATION_URL[getEnvironment()];
export const loginserviceUrl = LOGINSERVICE_URL[getEnvironment()];
export const arbeidssokerUrl = ARBEIDSSOKER_URL[getEnvironment()];
export const baseUrl = BASE_URL[getEnvironment()];
