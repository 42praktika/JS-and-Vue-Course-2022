const path = require('path');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');

// const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
module.exports = {
    mode,
    // target,
    devtool,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname,'build'),
        clean: true,
        filename: "[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src','index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use:["style-loader", "css-loader"],
            },
        ]
    }

}