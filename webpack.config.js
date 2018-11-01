const webpack = require('webpack');
const path = require("path")
const PATH_PROJECT_BASE = process.cwd(); // why can't i use this in windows 10 process.env.PWD;

const PATH_OUTPUT_BASE = path.resolve(PATH_PROJECT_BASE, "dist")
const PATH_JS_SRC = path.resolve(PATH_PROJECT_BASE, "src")

console.log(path.resolve(PATH_JS_SRC, "templates"))
module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        // loader : 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx'],
    modules: [

      path.resolve(PATH_PROJECT_BASE),
      path.resolve(PATH_PROJECT_BASE, "node_modules"),
      path.resolve(PATH_JS_SRC, "templates"),
      path.resolve(PATH_JS_SRC, "views")
    ],
    symlinks: false
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
