import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import importMapPlugin from "@eik/rollup-plugin";

const reactUrl = "https://asset-bucket-proxy.dev.intern.nav.no/react-17.esm.js";
const reactDomUrl =
  "https://asset-bucket-proxy.dev.intern.nav.no/react-dom-17.esm.js";

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
