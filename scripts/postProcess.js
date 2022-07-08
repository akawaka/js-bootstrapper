const { exec, execScript } = require('../src/utils');

module.exports = async function(options) {
    const { css, model, folder } = options;

    await execScript(`/${model}/postProcess.js`, options);
    await execScript(`/${css}/postProcess.js`, options);
    await exec('npm install', folder);
    await exec('./configure --env dev --with-docker', folder);
}
