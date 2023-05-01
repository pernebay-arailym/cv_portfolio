// rollup.config.js

import { terser } from "@rollup/plugin-terser";

const rollupObject = {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    terser({
      mangle: false,
    }),
  ],
};

export default rollupObject;
