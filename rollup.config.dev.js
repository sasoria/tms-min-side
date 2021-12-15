import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import importmap from "@eik/rollup-plugin";

export default {
  input: "src/index.js",
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
      "process.env.NODE_ENV": JSON.stringify("development"),
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
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "dist", "public"],
      historyApiFallback: true,
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ],
  output: {
    file: "dist/bundle.js",
    format: "esm",
    sourcemap: true,
  },
};
