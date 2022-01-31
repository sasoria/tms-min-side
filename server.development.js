const configureServer = require('./utils/configure-server');

const port = 3000;
(async () => {
    const devServer = await configureServer(true);
    devServer.listen(port, () => {
        console.info(`Dev server running on port ${port}`)
    });
})();
