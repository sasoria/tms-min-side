import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import importMapPlugin from "@eik/rollup-plugin";

const reactUrl = "https://asset-bucket-proxy.dev.intern.nav.no/asset/react/v/17.0.2/index.esm.js";
const reactDomUrl =
  "https://asset-bucket-proxy.dev.intern.nav.no/asset/react-dom/v/17.0.2/index.esm.js";

const imports = {
  react: reactUrl,
  "react-dom": reactDomUrl,
};

export default defineConfig({
  plugins: [
    react(),
    {
      ...importMapPlugin([{ imports }]),
      enforce: "pre",
      apply: "build",
    },
  ],
});
