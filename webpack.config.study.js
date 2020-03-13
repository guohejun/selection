const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const config = {
	target:'web',
	entry: path.join(__dirname, "src/index.js"), //输入文件
	output: {
		filename: "build.js", //输出文件
		path: path.join(__dirname, 'dist') //输出路径
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: isDev ? '"development"' : '"production"',
			}
		}),
		new HTMLPlugin(),
	],
};

if(isDev){
	config.devtool= '#cheap-module-eval-source-map';
	config.devServer= {
		port: 8089,
		host: '0.0.0.0',
		overlay: {
			errors:true
		},
		// open:true  //每次都打开一个网页
		hot: true //只渲染一个组件
	};
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	)
}

module.exports = config;