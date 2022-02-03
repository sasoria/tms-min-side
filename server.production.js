const express = require("express");
const {
  injectDecoratorServerSide,
} = require("@navikt/nav-dekoratoren-moduler/ssr");

const app = express();

const basePath = "/tms-min-side";
app.get(`${basePath}/internal/isAlive`, (req, res) => {
  res.sendStatus(200);
});

app.get(`${basePath}/internal/isReady`, (req, res) => {
  res.sendStatus(200);
});

const indexHtmlLocation = "./index.html";

const decoratorEnv =
  process.env.NAIS_CLUSTER_NAME === "prod-gcp" ? "prod" : "dev";

app.use('/dist', express.static("dist", { index: false }));
app.use(/^\/(?!.*dist).*$/, async (req, res) => {
  try {
    const html = await injectDecoratorServerSide({
      env: decoratorEnv,
      filePath: indexHtmlLocation,
      chatbot: false,
      taSurveys: false,
    });
    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    console.error(e);
    res.status(500).end(e.message);
  }
});

app.listen(7100, () => {
  console.info("Listening on port 7100");
});
