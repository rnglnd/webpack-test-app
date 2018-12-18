const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  plugins: [new HtmlWebpackPlugin(), new BundleAnalyzerPlugin()],
  devServer: {
    port: 3000
  }
};
