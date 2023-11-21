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
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                // loader:'css-loader',
                use:['style-loader', 'css-loader', ]    //the order matters
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: 'index.html',
            minify:{}   //minify output codes
        }
    ), ],//try use template here, and filename,chunks for multifiles

};