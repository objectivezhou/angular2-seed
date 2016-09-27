const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const webpack = require('webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const WatchIgnorePlugin = require("webpack").WatchIgnorePlugin;
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
const METADATA =  {
  host: HOST,
  port: PORT
};
module.exports = function(options) {
  return webpackMerge(commonConfig(), {
    devtool: 'cheap-module-source-map',
    output: {
      path: helpers.root('dist', 'dev'),
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js',
    },

    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
      new webpack.WatchIgnorePlugin([
            /\.scss$/
      ])
    ],
    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      historyApiFallback: true,
      contentBase: './src'
    }

  });
};
