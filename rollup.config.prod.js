import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import importmap from "@eik/rollup-plugin";

export default {
  input: "src/app.js",
  plugins: [
    importmap({
      maps: [
        {
          imports: {
            react: "https://asset-bucket-proxy.dev.intern.nav.no/react-17.esm.js",
            "react-dom": "https://asset-bucket-proxy.dev.intern.nav.no/react-dom-17.esm.js",
          },
        },
      ],
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
  ],
};
