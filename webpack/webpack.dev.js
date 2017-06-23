const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'script.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  module: {
    rules: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '..', 'src'),
      },
      { test: /\.scss?$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, '..', 'src', 'styles'),
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
};
