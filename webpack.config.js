// Packages
const webpack = require('webpack');
const path = require("path");
const fs = require("fs");

// Input
const PATH_PROJECT_BASE = process.cwd(); // why can't i use this in windows 10 process.env.PWD;
const PATH_JS_SRC = path.resolve(PATH_PROJECT_BASE, "src", "js");
const PATH_HTML_SRC = path.resolve(PATH_PROJECT_BASE, "src", "html");
const PATH_CSS_SRC = path.resolve(PATH_PROJECT_BASE, "src", "html");

// Output
const PATH_OUTPUT_BASE = path.resolve(PATH_PROJECT_BASE, "dist");

// Create `/dist` if not there
if (!fs.existsSync(PATH_OUTPUT_BASE)) {
	fs.mkdirSync(PATH_OUTPUT_BASE);
}

// Copy index.html
fs.copyFileSync(
	path.resolve(PATH_HTML_SRC, "index.html"),
	path.resolve(PATH_OUTPUT_BASE, "index.html")
);

module.exports = {
	devtool: "source-map",
	entry: path.resolve(PATH_JS_SRC, "index.jsx"),
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		}]
	},
	resolve: {
		extensions: [ '.js', '.jsx'],
		modules: [
			path.resolve(PATH_PROJECT_BASE),
			path.resolve(PATH_PROJECT_BASE, "node_modules"),
			path.resolve(PATH_JS_SRC, "actions"),
			path.resolve(PATH_JS_SRC, "constants"),
			path.resolve(PATH_JS_SRC, "reducers"),
			path.resolve(PATH_JS_SRC, "store"),
			path.resolve(PATH_JS_SRC, "utils"),
			path.resolve(PATH_JS_SRC, "components"),
			path.resolve(PATH_JS_SRC, "components", "pages"),
			path.resolve(PATH_JS_SRC, "components", "debug"),
		],
		symlinks: false
	},
	output: {
		path: PATH_OUTPUT_BASE,
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: PATH_OUTPUT_BASE,
		hot: true
	},
	mode: 'development'
};