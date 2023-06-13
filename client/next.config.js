/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
});

const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		})

		return config
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/**/**',
			},
		],
	},

}
module.exports = nextConfig


// module.exports = {
// 	webpack(config) {
// 		config.module.rules.push({
// 			test: /\.svg$/i,
// 			issuer: /\.[jt]sx?$/,
// 			use: ['@svgr/webpack'],
// 		})

// 		return config
// 	},
// }

const path = require('path')
module.exports = {
	trailingSlash: true,
	// webpackDevMiddleware: config => {
	// 	config.watchOptions = {
	// 		poll: 1000,
	// 		aggregateTimeout: 300
	// 	}
	// 	return config
	// },
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/**/**',
			},

			{
				protocol: 'https',
				hostname: '*.unsplash.com',
				port: '',
				pathname: '/**/**',
			},
		],
	},
}