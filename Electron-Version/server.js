var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var port = '4000';
var server = 'localhost';
new WebpackDevServer(webpack(config), {
    contentBase: __dirname + "/views",
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true
}).listen(port, server, function(err, result){
    if(err){
        console.log(err);
        return;
    }
    console.log('Start webpack server at port ' + port);
});
