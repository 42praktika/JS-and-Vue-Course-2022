const path = require('path');

module.exports = (env, options) => {
    const developmentMode = options.mode !== 'production';
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'main.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: path.resolve(__dirname, './node_modules/'),
                },
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },

                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                }
            ],
        },
        devtool: developmentMode ? 'eval-source-map' : 'cheap-source-map',
    };
};
