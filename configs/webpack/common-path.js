/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

const BASE_PATH = path.join(__dirname, '../../');
const APP_PATH = path.join(BASE_PATH, 'src');
const BUILD_PATH = path.join(BASE_PATH, 'build');

module.exports = {
    BASE_PATH,
    APP_PATH,
    BUILD_PATH,
};
