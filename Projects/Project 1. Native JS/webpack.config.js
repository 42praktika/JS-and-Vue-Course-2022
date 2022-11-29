const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.Node_ENV || 'development';

module.exports = {
    entry: './src/index.js',
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        {
            test: /\.html$/i,
            loader: 'html-loader',
        }
    ],
  },
    output: {
        path: path.resolve(__dirname, './dist'),
        clean: true,
        filename: 'index.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
    })],
    mode,
}