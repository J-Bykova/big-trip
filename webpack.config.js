const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve('public'),
  },
  devServer: {
    hot: false
  },
  module: {
    rules: [
      {
        test: /\.js@/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  },
};
