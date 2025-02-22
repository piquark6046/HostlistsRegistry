/* globals require, __dirname, process */

const path = require('path');
const builder = require("adguard-hostlists-builder");

const filtersDir = path.join(__dirname, './filters');
const assetsDir = path.join(__dirname, './assets');
const tagsDir = path.join(__dirname, './tags');
const localesDir = path.join(__dirname, './locales');

(async () => {
    try {
        await builder.build(filtersDir, tagsDir, localesDir, assetsDir);
    } catch (e) {
        console.error('Failed to compile hostlists', e)
    }
})();
