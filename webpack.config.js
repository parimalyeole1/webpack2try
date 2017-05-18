const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })

            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.bundle.css"),
        new HtmlWebpackPlugin({
            title: 'Webpack 2 try Today',
            filename: 'app.html',
            template: './src/index.html'
        })
    ]
}   