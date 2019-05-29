// KSFace v0.1.1 - www.ksface.com
// Copyright (c) 2019 Kevin Schmidt Webentwicklung - www.kswebentwicklung.de

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production', // production or development (minify output or not)
  entry: './src/index.js',
  output: {
    filename: './ksface.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
