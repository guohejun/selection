const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.resolve(__dirname);
module.exports = {
	entry: {
		index: "./src/index.js",
		// staticIndex: "./static/index.static.js"
	},
	output: {
		filename: "[name].bundle.js",
		chunkFilename: "[name].demand.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: path.resolve(rootPath, "node-modules"),
				include: rootPath
			}
		]
	},
	devServer: {
		port: 8089
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "app",
			template: "./src/index.html",
			filename: "index.html",
			hash: true
		}),
	],
};