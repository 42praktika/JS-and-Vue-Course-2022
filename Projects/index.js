console.log("Hello world")
module.exports = {
    // ...

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].index.js',
    },
}s