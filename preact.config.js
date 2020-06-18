const path = require('path');
const netlifyPlugin = require('preact-cli-plugin-netlify');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = (config, env) => {
	if (!env.ssr) {
		config.resolve.alias[process.cwd()+'/node_modules/@preact/async-loader/async-legacy.js'] = path.resolve(__dirname, 'async-component.js');
	}
	netlifyPlugin(config, {
		mutateManifest: manifest => {
			manifest['/blog/*'] = manifest['/blog'];
			return manifest;
		}
	});
	config.plugins.push(new ImageminPlugin({
		from: './build/assets/**',
		pngquant: {
			quality: '60'
		},
		plugins: [
			imageminMozjpeg({
				quality: 50,
				progressive: true
			})
		]
	}));
	return config;
};
