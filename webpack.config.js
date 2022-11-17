const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: resolve(__dirname, './src/index.jsx'),
  output: {
    clean: true,
    environment: {
      arrowFunction: false,
    },
    path: resolve(__dirname, './build'),
    filename: 'bundle.[contenthash].js',
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool:
    process.env.NODE_ENV === 'production'
    ? 'hidden-source-map'
    : 'eval-source-map',
  module: {
    rules: [
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      { 
        exclude: /\.module\.s?css$/i,
        test: /\.s?css$/i,
        use: [
          isDev ? 'style-loader': MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[hash:base64:5]',
                mode: 'icss',
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.module\.s?css$/i,
        use: [
          isDev ? 'style-loader': MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[hash:base64:5]',
                mode: 'local',
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
      },
      {
        test: /\.mp[3|4]$/i,
        use: ['file-loader'],
      },
    ]
  },
  optimization: {
    minimizer: [
      '...', new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 9999,
  }
}