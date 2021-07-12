module.exports = {
    root: true,
    extends: [
        '@indriver/eslint-config',
        '@indriver/eslint-config/rules/react',
        '@indriver/eslint-config/rules/react-hooks',
        '@indriver/eslint-config/rules/prettier',
        '@indriver/eslint-config/rules/typescript',
        '@indriver/eslint-config/rules/jest',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
};
