const { injectDecoratorServerSide } = require('@navikt/nav-dekoratoren-moduler/ssr');

const decoratorEnv = process.env.NAIS_CLUSTER_NAME === "prod-gcp" ? "prod" : "dev";

const getHtmlWithDecorator = (filePath) =>
  injectDecoratorServerSide({
    env: decoratorEnv,
    filePath: filePath,
    enforceLogin: false,
    level: 'Level4',
    redirectToApp: true,
    utloggingsvarsel: true,
    breadcrumbs: [{ url: `https://www.nav.no/person/min-side`, title: 'DittNav' }],
  });

module.exports = getHtmlWithDecorator;
