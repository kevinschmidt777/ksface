// KSFace - www.ksface.com
// Copyright (c) 2019 Kevin Schmidt - www.kswebentwicklung.de

const path = require('path');

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
