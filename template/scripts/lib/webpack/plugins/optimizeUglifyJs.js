const {envComp} = require('../../utils'),
  TerserPlugin = require('terser-webpack-plugin');

module.exports = function() {
  return envComp('producion') ? [new TerserPlugin({
    terserOptions: {
      ecma: 6,
      output: {
        comments: false,
        beautify: false,
      },
      compress: {
        warnings: true,
      },
    },
    sourceMap: false,
  })] : [];
};
