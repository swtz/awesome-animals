const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', 'whatwg-fetch', './js/script.js'],
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'main.js',
  },
};
