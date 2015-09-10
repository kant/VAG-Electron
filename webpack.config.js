var webpack = require('webpack');
module.exports = {
  entry: {
    index: [
      'webpack-dev-server/client?http://127.0.0.1:4000',
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
      loader: 'react-hot!jsx-loader?harmony'
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
