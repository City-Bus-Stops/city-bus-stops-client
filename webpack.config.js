const webpack = require('webpack');

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
    new webpack.NodeEnvironmentPlugin(),
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
    loaders: [{
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
    }, {
      test: /\.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    }, {
      test: /\.json/,
      use: ['json-loader'],
    }, {
      test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|woff2)$/i,
      use: ['file-loader'],
    }]
  }
};
