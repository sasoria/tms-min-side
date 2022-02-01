const cors = require('cors');
const configureServer = require('./utils/configure-server');

(async () => {
    const prodServer = await configureServer();
    prodServer.use(cors({ origin: ["http://localhost:3000", "http://localhost:7150"] }));
    const basePath = "/tms-min-side";
    prodServer.get(`${basePath}/internal/isAlive`, (req, res) => {
        res.sendStatus(200);
      });
      
    prodServer.get(`${basePath}/internal/isReady`, (req, res) => {
        res.sendStatus(200);
    });

    prodServer.listen(4000);
})();
