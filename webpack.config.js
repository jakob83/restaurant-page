const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/template.html",
            title: "Webpack Asset Management",
            inject: "body",
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.html$/,
                use: ['html-loader'],
            },

            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource', // Using asset/resource to handle images
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            }

        ],
    },
}