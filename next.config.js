const path = require('path');

module.exports = {
	reactStrictMode: true,
	images: {
		loader: 'imgix',
		formats: ['image/avif', 'image/webp'],
		path: '',
	},
	webpack: (config) => {
		config.resolve.alias['~'] = path.resolve(__dirname);
		return config;
	},
};
