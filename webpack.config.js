var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CLIENT_DIR =  __dirname + '/client';

var webpackConfig = {
    context: CLIENT_DIR,
    entry: {
        "main": [
            CLIENT_DIR + '/App.jsx'
        ]
    },
    output: {
        path: CLIENT_DIR,
        filename: `bundle.[name].[hash].js`
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: `index.ejs`
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss?$/,
                loader: 'style!css!sass',
                include: path.join(CLIENT_DIR, 'styles')
            }
        ]
    }
};

module.exports = webpackConfig;