const { exec } = require('../../src/utils');

module.exports = async function({ folder }) {
    await exec('npm install --save-dev bootstrap@^5.0', folder);
}
