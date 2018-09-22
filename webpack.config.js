const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: Path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.css$/, include: /src/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] },
      { test: /\.js$/, include: /src/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html'
    })
  ],
  devtool: 'inline-source-map'
};
