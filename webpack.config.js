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
				test: /\.js$/,
				loaders: "babel-loader",
				exclude: path.resolve(rootPath, "node-modules"),
				include: rootPath
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.png|jpg|jpeg|gif|svg$/,
				loaders: "url-loader",
				options: {
					limit: 1000
				}
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