const path = require('path');

module.exports = {
  entry: './assets/js/index.js', // Your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js'), // Output to Jekyll's assets
  },
  mode: 'production'
};