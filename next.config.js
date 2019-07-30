// next.config.js
const withCSS = require('@zeit/next-css')
const { parsed: GH_TOKEN } = require('dotenv').config();
const webpack = require('webpack');

module.exports = withCSS({
  cssModules: true,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(GH_TOKEN))
    return config
  }
})