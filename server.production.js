const express = require("express");
const { injectDecoratorServerSide } = require('@navikt/nav-dekoratoren-moduler/ssr');

const app = express();

const basePath = "/tms-min-side";
app.get(`${basePath}/internal/isAlive`, (req, res) => {
  res.sendStatus(200);
});

app.get(`${basePath}/internal/isReady`, (req, res) => {
  res.sendStatus(200);
});

const indexHtmlLocation = "./index.html";
app.use(express.static("./dist/client", { index: false }));
app.use("*", async (req, res) => {
  try {
    const html = await injectDecoratorServerSide({
      env: "prod",
      filePath: indexHtmlLocation,
      simple: true,
      chatbot: false,
      taSurveys: false,
    });
    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    console.error(e);
    res.status(500).end(e.message);
  }
});

app.listen(8080, () => {
  console.info("Listening on port 8080");
});
