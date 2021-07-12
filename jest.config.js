module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    setupFiles: ['<rootDir>/configs/jest/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/@indriver/(?!ysera)'],
    testMatch: ['<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}', '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}'],
    moduleNameMapper: {},
    globals: {
        NODE_ENV: 'test',
    },
    verbose: true,
};
