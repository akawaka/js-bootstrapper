#!/usr/bin/env node
const { exists, copyTemplate, exec } = require('../src/utils');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
    .command('create <folder>', 'Create new JavaScript project', (yargs) => {
        return yargs.positional('folder', { describe: 'Folder for project' });
    }, async ({ model, folder }) => {
        try {
            //await exists(folder);
            await copyTemplate('common', folder);
            await copyTemplate('ci', folder);
            await copyTemplate(model, folder);
            await exec('npm install', folder);
            await exec('./configure --env dev --with-docker', folder);
        } catch (err) {
            console.error(err.message);
        }
    })
    .option('model', {
        alias: 'm',
        type: 'string',
        description: 'Model to use',
        default: 'vanilla'
    })
    .demandCommand(1)
    .parse()
;
