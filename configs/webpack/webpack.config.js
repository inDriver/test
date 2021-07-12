/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

const ENV_CONFIGS = {
    production: prodConfig,
    development: devConfig,
};

const getInitialConfig = () => {
    return {
        ...commonConfig,
    };
};
const getEnvConfig = (w, argv) => {
    return {
        ...ENV_CONFIGS[argv.mode],
    };
};

module.exports = (webpackConfigEnv, argv) => {
    return webpackMerge.smart(getInitialConfig(webpackConfigEnv, argv), getEnvConfig(webpackConfigEnv, argv));
};
