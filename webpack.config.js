const HTMLPlugin = require('html-webpack-plugin');
module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
	},
	devServer: {
		inline: true,
		port: 8089
	},
	plugins: [
		new HTMLPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
	],
};