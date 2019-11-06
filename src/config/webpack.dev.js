const merge = require("webpack-merge");
const webpack = require("../../webpack.config");

module.exports = env =>
  merge(webpack(env), {
    mode: "development",
    devtool: "inline-source-map"
  });
