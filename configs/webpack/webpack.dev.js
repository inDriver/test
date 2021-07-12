/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const webpack = require('webpack');
const { BUILD_PATH } = require('./common-path');

const port = process.env.PORT ?? 3666;
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: BUILD_PATH,
        publicPath: '/',
        filename: 'js/[name].[hash].js',
        pathinfo: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        host: 'localhost',
        port,
        historyApiFallback: true,
        hot: true,
        open: true,
        contentBase: BUILD_PATH,
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
};
