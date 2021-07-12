module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'entry',
                corejs: '3.7.0',

                targets: {
                    browsers: ['last 3 chrome version', 'last 3 firefox version', 'last 3 safari version'],
                    node: 'current',
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-object-rest-spread',
        'react-hot-loader/babel',
    ],
    env: {
        production: {
            plugins: [
                '@babel/plugin-transform-react-inline-elements',
                '@babel/plugin-transform-react-constant-elements',
            ],
        },
        development: {
            plugins: [
                [
                    'babel-plugin-styled-components',
                    {
                        fileName: true,
                        displayName: true,
                    },
                ],
            ],
        },
        test: {
            plugins: ['@babel/plugin-transform-modules-commonjs'],
        },
    },
};
