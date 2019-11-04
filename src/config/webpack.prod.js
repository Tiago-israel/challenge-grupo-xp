const merge = require("webpack-merge");
const webpack = require("../../webpack.config");

module.exports = merge(webpack, {
  mode: "production"
});
