const path = require('path');

module.exports = {
  entry: './worker.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'webworker',
  mode: 'production',
 
};
