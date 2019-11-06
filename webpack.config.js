const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const fs = require("fs");

module.exports = env => {
  const currentPath = path.join(__dirname);
  const basePath = currentPath + "/.env";
  const envPath = basePath + "." + env.ENVIRONMENT;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"] }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      }),
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
