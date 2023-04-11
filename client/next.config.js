/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

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