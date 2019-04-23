// KSFace v1.0.0 - www.ksface.com
// Copyright (c) 2019 Kevin Schmidt Webentwicklung - www.kswebentwicklung.de

const path = require('path');

module.exports = {
  mode: 'production', // production or development (minify output or not)
  entry: './src/index.js',
  output: {
    filename: './js/ksface.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
