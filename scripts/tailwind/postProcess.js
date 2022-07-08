const { exec } = require('../../src/utils');

module.exports = async function({ folder }) {
    await exec('npm install --save-dev postcss postcss-loader@^6.0 tailwindcss@^3.0', folder);
    await exec('sed -i "s/\\/\\/.enablePostCssLoader()/.enablePostCssLoader()/g" webpack.config.js', folder);
}
