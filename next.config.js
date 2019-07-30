// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true,
  env: {
    GH_TOKEN: process.env.GH_TOKEN
  }
})