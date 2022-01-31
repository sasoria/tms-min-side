const configureServer = require('./utils/configure-server');

(async () => {
    const prodServer = await configureServer(false);
    prodServer.listen(8080);
})();
