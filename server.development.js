const cors = require("cors");
const configureServer = require('./utils/configure-server');

const port = 3000;
(async () => {
    const devServer = await configureServer();
    devServer.use(cors({ origin: ["http://localhost:3000", "http://localhost:7150"] }));
    devServer.listen(port, () => {
        console.info(`Dev server running on port ${port}`)
    });
})();
