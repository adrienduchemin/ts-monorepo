const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.local.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dev.bundle.js",
  },
  module: {
    rules: [
      {
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],

  optimization: {
    usedExports: true,
  },
  // devtool: "inline-source-map",
});
