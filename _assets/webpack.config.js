/* eslint-disable global-require */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
const TerserPlugin = require('terser-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const sassParser = require('sass');

const distDir = '../../assets';
const main = ['./js/index.js', './scss/index.scss'];
const demo = ['./js/demo.js'];

module.exports = (env, argv) => ({
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  entry: {
    main,
    demo,
  },
  output: {
    filename: `${distDir}/js/[name].js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|otf|gif|png|jpg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
      },
      {
        test: /\.css|sass|scss$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sassParser,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: `${distDir}/css/[name].css`,
    }),
  ],
});
