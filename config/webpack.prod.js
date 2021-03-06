const webpack = require('webpack');
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const CompressionPlugin = require("compression-webpack-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');


module.exports = function(options) {
  return webpackMerge(commonConfig(), {
    devtool: 'source-map',
    output: {

      path: helpers.root('dist', 'prod'),

      filename: '[name].[chunkhash].js',

      chunkFilename: '[id].[chunkhash].chunk.js'

    },

    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: false,
        htmlLoader: {
          minimize: true,
          removeAttributeQuotes: false,
          caseSensitive: true,
          customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
          ],
          customAttrAssign: [/\)?\]?=/]
        }
      }),
      new WebpackMd5Hash(),
      new webpack.optimize.UglifyJsPlugin({
        // beautify: true, //debug
        // mangle: false, //debug
        // dead_code: false, //debug
        // unused: false, //debug
        // deadCode: false, //debug
        // compress: {
        //   screw_ie8: true,
        //   keep_fnames: true,
        //   drop_debugger: false,
        //   dead_code: false,
        //   unused: false
        // }, // debug
        // comments: true, //debug

        sourceMap: true,
        beautify: false, //prod
        mangle: { screw_ie8 : true, keep_fnames: true }, //prod
        compress: { screw_ie8: true, warnings: false }, //prod
        comments: false //prod
      }),
      new CompressionPlugin({
        regExp: /\.css$|\.html$|\.js$|\.map$/,
        threshold: 2 * 1024
      })
    ]
  });
};
