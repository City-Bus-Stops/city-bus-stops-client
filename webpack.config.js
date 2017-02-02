const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    './app/index'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
    compress: true,
    hot: true,
    inline: true
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'source-map-loader'
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: ['babel'],
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.json/,
      loader: 'json-loader'
    }, {
      test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|woff2)$/i,
      loader: 'file'
    }]
  }
};
