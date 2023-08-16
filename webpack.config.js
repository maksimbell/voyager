const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
        }),
        new Dotenv()
    ],
    devServer: {
        port: 3030,
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Pages: path.resolve(__dirname, 'src/pages'),
            Assets: path.resolve(__dirname, 'src/assets'),
            Helpers: path.resolve(__dirname, 'src/helpers'),
            Constants: path.resolve(__dirname, 'src/constants'),
            Api: path.resolve(__dirname, 'src/api'),
        }
    }
};