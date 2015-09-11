var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    index: [
      'webpack-dev-server/client?http://localhost:4000',
      'webpack/hot/only-dev-server',
      './views/index.js'
    ]
  },
  output: {
    path: __dirname + '/views/assets',
    publicPath: '/views/assets',
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'jsx?harmony']
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.woff$/,
      loader: 'url?limit=100000'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.woff', '.png', '.jpg']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
