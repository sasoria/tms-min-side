import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import importmap from "@eik/rollup-plugin";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import postcssLessLoader from "rollup-plugin-postcss-webpack-alias-less-loader";

const reactUrl = "https://asset-bucket-proxy.dev.intern.nav.no/react-17.esm.js";
const reactDomUrl = "https://asset-bucket-proxy.dev.intern.nav.no/react-dom-17.esm.js";

const imports = {
  react: reactUrl,
  "react-dom": reactDomUrl,
};

export default {
  input: "src/App.js",
  plugins: [
    importmap({
      maps: [{ imports }],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    nodeResolve({
      extensions: [".js"],
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs({
      include: ["node_modules/**"],
    }),
    json(),
    postcss({
      extract: false,
      loaders: [
        postcssLessLoader({
          nodeModulePath: "./node_modules",
          aliases: {},
        }),
      ],
    }),
  ],
  output: {
    file: "dist/bundle.esm.js",
    format: "esm",
  },
};
