const fs = require("fs");
const path = require("path");
const express = require("express");
const { createServer: createViteServer } = require("vite");
const {
  injectDecoratorServerSide,
} = require("@navikt/nav-dekoratoren-moduler/ssr");

(async () => {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: "ssr" },
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    const indexHtmlLocation = "./index.development.html";
    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, indexHtmlLocation),
        "utf-8"
      );
      template = await vite.transformIndexHtml(url, template);
      const html = await injectDecoratorServerSide({
        env: "dev",
        filePath: indexHtmlLocation,
        chatbot: false,
        taSurveys: false,
      });
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  const port = 3000;
  app.listen(port, () => {
    console.info(`Dev server running on port ${port}`);
  });
})();
