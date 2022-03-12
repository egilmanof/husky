const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    devtool: 'inline-source-map',
    entry: './src/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HTMLWebpackPlugin({template: './src/index.html'})
    ],
    module: {
        rules: [
            // SCSS
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // TYPESCRIPT
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        port: 3000
    }
}