const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:
    {
        main: './src/script.js',
        test: './src/test.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, //regExp
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(), ],
};