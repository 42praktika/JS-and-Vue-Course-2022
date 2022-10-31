const path = require('path');
const EncodingPlugin = require('webpack-encoding-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

let developmentMode;
module.exports = {

    mode: process.env.NODE_ENV || 'development',


    entry: {
        'core': './js/index.js'
    },


    output: {
        path: path.resolve(__dirname, './js/build/'),
        filename: '[name].bundle.js',
    },

    module: {

        rules: [

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules/')
            },

            {
                test: /\.css$/,
                use: [
                    'css-loader',
                    'style-loader',
                ]
            },
        ]

    },


    plugins: [
        new EncodingPlugin({
            encoding: 'utf-8'
        }),
        new MomentLocalesPlugin({
            localesToKeep: ['ru'],
        }),
    ],

    resolve: {

        alias: {
            '@': path.resolve(__dirname, 'js/')
        }
    },


    devtool: developmentMode ? 'eval-source-map' : 'cheap-source-map'
};
