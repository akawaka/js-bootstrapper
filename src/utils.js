const fs = require('fs');
const { exec } = require('child_process')

module.exports = {
    async exists(folder) {
        return new Promise((resolve, reject) => {
            fs.access(folder, (err) => {
                if (!err) {
                    return reject(new Error(`Folder "${folder}" already exists.`));
                }

                resolve();
            });
        });
    },

    async copyTemplate(templateName, folder) {
        return new Promise((resolve, reject) => {
            console.log(`Coping ${templateName} model into ${folder}`);
            fs.cp(`${__dirname}/../template/${templateName}`, folder, { recursive: true, force: true }, (err) => {
                if (err) {
                    reject(err);
                }

                resolve();
            });
        });
    },

    exec(cmd, cwd) {
        console.log(`${cmd} ...`);

        return new Promise((resolve, reject) => {
            exec(cmd, { cwd }, (err, stdout) => {
                if (!!err) {
                    return reject(err);
                }

                return resolve(stdout.trim());
            });
        });
    },
};
