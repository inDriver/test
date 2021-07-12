/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');
const { BUILD_PATH } = require('./common-path');

module.exports = {
    mode: 'production',
    output: {
        path: BUILD_PATH,
        publicPath: '/',
        filename: 'js/[name].[contenthash:8].js',
        pathinfo: true,
    },
    plugins: [
        process.env.ANALYZE && new BundleAnalyzerPlugin(),
        process.env.ANALYZE &&
            new StatsWriterPlugin({
                filename: 'stats.json',
                timings: true,
                fields: null,
            }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as(entry) {
                if (entry.endsWith('.css')) return 'style';
                if (entry.endsWith('.woff')) return 'font';
                if (entry.endsWith('.png')) return 'image';

                return 'script';
            },
        }),
        new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new CompressionPlugin({
            filename: '[path][base].br',
            algorithm: 'brotliCompress',
            test: /\.(js|css|html|svg)$/,
            compressionOptions: {
                params: {
                    [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                },
            },
            threshold: 10240,
            minRatio: 0.8,
        }),
    ].filter(Boolean),
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2,
                },
                polyfills: {
                    test: /[\\/]node_modules[\\/](core-js)[\\/]/,
                    name: 'polyfills',
                    chunks: 'all',
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    priority: -10,
                },
            },
        },
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 8,
                    mangle: false,
                    keep_classnames: true,
                    keep_fnames: true,
                },
            }),
        ],
    },
};
