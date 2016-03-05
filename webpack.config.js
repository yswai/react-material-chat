var webpack = require('webpack');
var CWD = __dirname;

var config = {
    entry: {
        "main": `${CWD}/client/app.js`
    },
    output: {
        filename: `${CWD}/client/bundle.[hash].js`
    },
    plugins: [

    ],
    loaders: [

    ]
};

module.exports = config;