const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  watch: false, 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/scripts.js'
  },
  module: {
    rules: [
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':data-src'],
          interpolate: true
        }
      }
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader'
        ]
      })
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
        {
          from:'./src/assets/images',to:'assets/images'
        } 
    ]), 
    new ExtractTextPlugin('assets/css/styles.css'),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin(
      {
        template: "./src/index.html",
        filename: "./index.html"
      }
    )
  ]
};