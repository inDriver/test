/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const CopyPlugin = require('copy-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const { APP_PATH, BUILD_PATH } = require('./common-path');

module.exports = {
    entry: {
        app: [APP_PATH],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        path: BUILD_PATH,
        filename: 'app.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(woff2?|ttf|otf|eot)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(gif|png|jpe?g|webp|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 10 * 1024, name: '[path][name].[contenthash:8].[ext]' },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                                enabled: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new WebpackBar(),
        new HtmlWebpackPlugin({
            template: `src/index.html`,
        }),
        new DuplicatePackageCheckerPlugin(),
        new CopyPlugin({
            patterns: [{ from: `public/assets`, to: 'public/assets' }],
        }),
    ],
};
