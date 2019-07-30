// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/blog/prateek': { page: '/blog', query: { name: 'Hello Prateek' } },
      '/blog/megha': { page: '/blog', query: { name: 'Hello Megha' } },
    };
  }
})