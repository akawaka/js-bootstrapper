const { exec } = require('../../src/utils');

module.exports = async function({ css, folder }) {
    if ('tailwind' === css) {
        await exec('npm install --save-dev @headlessui/react@^1.6', folder);
    }
}
