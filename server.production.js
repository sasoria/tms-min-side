const configureServer = require('./utils/configure-server');

(async () => {
    const prodServer = await configureServer();
    prodServer.listen(8080);
})();
