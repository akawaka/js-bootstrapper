const fs = require('fs');
const { exec } = require('child_process');
const chalk = require('chalk');

module.exports = {
    exists(folder) {
        return new Promise((resolve, reject) => {
            fs.access(folder, (err) => {
                if (!err) {
                    return reject(new Error(`Folder "${folder}" already exists.`));
                }

                resolve();
            });
        });
    },

    copyTemplate(templateName, folder) {
        return new Promise((resolve, reject) => {
            console.log(chalk.yellow(`Coping ${templateName} model into ${folder}`));
            fs.cp(`${__dirname}/../template/${templateName}`, folder, { recursive: true, force: true }, (err) => {
                if (err) {
                    reject(err);
                }

                resolve();
            });
        });
    },

    exec(cmd, cwd) {
        console.log(chalk.blue(`> ${cmd} ...`));

        return new Promise((resolve, reject) => {
            exec(cmd, { cwd }, (err, stdout) => {
                if (!!err) {
                    return reject(err);
                }

                return resolve(stdout.trim());
            });
        });
    },

    execScript(scriptName, options) {
        const scriptPath = `${__dirname}/../scripts/${scriptName}`;

        return new Promise((resolve) => {
            fs.access(scriptPath, (err) => {
                if (err) {
                    return resolve();
                }

                console.log(chalk.white(`Executing script ${scriptName} ...`));

                resolve(require(scriptPath)(options));
            });
        });
    },
};
