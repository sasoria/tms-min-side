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

const MIN_SIDE_TOPP_URL = {
  local: "http://localhost:3000/tms-min-side-topp/bundle.js",
  development: "https://person.dev.nav.no/tms-min-side-topp/bundle.js",
  production: "https://person.intern.nav.no/tms-min-side-topp/bundle.js",
};

const MIN_SIDE_BUNN_URL = {
  local: "http://localhost:3000/tms-min-side-bunn/bundle.js",
  development: "https://person.dev.nav.no/tms-min-side-bunn/bundle.js",
  production: "https://person.intern.nav.no/tms-min-side-bunn/bundle.js",
};

const LOGINSERVICE_URL = {
  local: "http://localhost:3000/loginservice",
  development: "https://loginservice.dev.nav.no/login?level=Level3",
  production: "https://loginservice.nav.no/login?level=Level3",
};

const INNLOGGINGSSTATUS_URL = {
  local: "http://localhost:3000/innloggingsstatus",
  development: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
  production: "https://www.nav.no/person/innloggingsstatus/auth",
};

export const minSideToppUrl = MIN_SIDE_TOPP_URL[getEnvironment()];
export const minSideBunnUrl = MIN_SIDE_BUNN_URL[getEnvironment()];
export const minSideUrl = MIN_SIDE_URL[getEnvironment()];
export const minSideProxyUrl = MIN_SIDE_PROXY_URL[getEnvironment()];
export const loginserviceUrl = LOGINSERVICE_URL[getEnvironment()];
export const innloggingsstatusUrl = INNLOGGINGSSTATUS_URL[getEnvironment()];
