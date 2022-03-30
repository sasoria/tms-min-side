const isProduction = window.location.href.includes("person.nav.no");
const isDevelopment = window.location.href.includes("person.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};
