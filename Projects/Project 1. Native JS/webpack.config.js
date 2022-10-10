const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

const devMode = mode === "development";

const target = devMode ? "web" : "browserslist";

const devtool = devMode ? "source-map" : undefined;



module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "[name].[contenthash].js",
    },
    plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"src","index.html")
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
    ]
    }
}