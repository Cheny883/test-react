const http = require('http');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var website = {
    publicPath: 'http://127.0.0.1:8000/'
}
module.exports = {
    entry: {
        cyb: path.join(__dirname,'src','index.js'),
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.join(__dirname,'dist'),
        publicPath: website.publicPath
    },
    plugins:[
      new  HtmlWebpackPlugin({
          title: "cyb react",
          filename: 'cyb.html',
          inject: true,
          favicon: path.join(__dirname,'src/ico','favicon-20180801070618479.ico')
      }),
      new ExtractTextPlugin('style.css'),
      // new CleanWebpackPlugin(['dist'])
    ],
    module:{
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude:/(node_modules)/,
                loader:'babel-loader'
            },
            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },
            {
                test:/\.(jpg|jpeg|png|svg|gif)$/,
                use:[{
                    loader: 'url-loader',
                    options:{
                        limit: 50000
                    }
                }],
            }
        ]
    },
    devServer:{
        index: 'cyb.html',
        contentBase: path.join(__dirname,'dist'),
        host: '127.0.0.1',
        port: 8000,
    }
}
