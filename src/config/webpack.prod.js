const merge = require("webpack-merge");
const webpack = require("../../webpack.config");

module.exports = env =>
  merge(webpack(env), {
    mode: "production"
  });
