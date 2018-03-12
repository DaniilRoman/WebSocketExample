const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUNDLE_DIR = path.resolve(__dirname, "dist");
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var CLIENT_DIR = path.resolve(__dirname, 'src/clinet');

module.exports = {
  //devtool: 'cheap-module-source-map',
  entry: "./src/client/app/index.js",
  output: {
    path: BUNDLE_DIR,
    filename: "bundle.js",
  },
  resolve: {

    /**
     * An array of extensions that should be used to resolve modules.
     */
    extensions: ['.jsx', '.js', '.css', '.html'],

    /**
     * An array of directory names to be resolved to the current directory
     */
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: 'css-loader',
        exclude: /node_modules/
      },

      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },



      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: "body"
    })],
  // node: {
  //   fs: "empty",
  //   net: "empty",
  //   tls: "empty"
  // },
  devServer: {
    compress: true,
    port: 9000
  }
};