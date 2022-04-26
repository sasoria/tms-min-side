import { getEnvironment } from "./api/environment";

const MIN_SIDE_URL = {
  local: "http://localhost:3000/minside",
  development: "https://www.dev.nav.no/minside",
  production: "https://www.intern.nav.no/minside",
};

const MIN_SIDE_PROXY_URL = {
  local: "http://localhost:3000/tms-min-side-proxy",
  development: "https://person.dev.nav.no/tms-min-side-proxy",
  production: "https://person.intern.nav.no/tms-min-side-proxy",
};

const AUTHENTICATION_URL = {
  local: "http://localhost:3000/authPing",
  development: "https://person.dev.nav.no/person/dittnav-api/authPing",
  production: "https://person.nav.no/person/dittnav-api/authPing",
};

const MIN_SIDE_TJENESTER = {
  local: "http://localhost:3000/tms-min-side-tjenester/bundle.js",
  development: "https://person.dev.nav.no/tms-min-side-tjenester/bundle.js",
  production: "https://person.intern.nav.no/tms-min-side-tjenester/bundle.js",
};

const LOGINSERVICE_URL = {
  local: "http://localhost:3000/loginservice",
  development: "https://loginservice.dev.nav.no/login?level=Level3",
  production: "https://loginservice.nav.no/login?level=Level3",
};

export const minSideUrl = MIN_SIDE_URL[getEnvironment()];
export const minSideTjenesterUrl = MIN_SIDE_TJENESTER[getEnvironment()];
export const minSideProxyUrl = MIN_SIDE_PROXY_URL[getEnvironment()];
export const authenticationUrl = AUTHENTICATION_URL[getEnvironment()];
export const loginserviceUrl = LOGINSERVICE_URL[getEnvironment()];
