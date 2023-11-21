const path = require('path');

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
};