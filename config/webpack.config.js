const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = require('./paths');

module.exports = {
  devtool: '#hidden-cheap-source-map',

  entry: [
    paths.app
  ],

  output: {
    filename: 'bundle.js',
    path: paths.dist
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      paths.app,
      'node_modules'
    ]
  },
// @TODO: asdsad
  module : {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader'],
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name : 'static/[name].[hash:8].[ext]'
            }
          }
        ]
      }, {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title   : 'Revolut Exchange',
      inject  : true,
      cache   : false,
      template: `${paths.app}/index.html`,
      favicon : `${paths.app}/assets/img/favicon.ico`
    }),
    new ExtractTextPlugin({
      filename: 'styles.[hash:8].css',
      disable: false,
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  ]
};
