import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import importmap from "@eik/rollup-plugin";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import postcssLessLoader from "rollup-plugin-postcss-webpack-alias-less-loader";

const reactUrl = "https://asset-bucket-proxy.dev.intern.nav.no/asset/react/v/17/index.esm.js";
const reactDomUrl = "https://asset-bucket-proxy.dev.intern.nav.no/asset/react-dom/v/17/index.esm.js";

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
      preventAssignment: true,
    }),
    nodeResolve({
      extensions: [".js"],
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: 'bundled',
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
    file: "dist/bundle.js",
    format: "esm",
  },
};
