const { exec } = require('../../src/utils');

module.exports = async function({ css, folder }) {
    if ('tailwind' === css) {
        await exec('npm install --save-dev @headlessui/vue@^1.6', folder);
    }
}
