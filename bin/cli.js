#!/usr/bin/env node
const { exists, copyTemplate, exec } = require('../src/utils');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');

yargs(hideBin(process.argv))
    .command('create <folder>', 'Create new JavaScript project', (yargs) => {
        return yargs.positional('folder', { describe: 'Folder for project' });
    }, async ({ model, folder }) => {
        console.log(chalk.green(`Installing ${model} project into ${folder} ...`));

        try {
            await exists(folder);
            await copyTemplate('common', folder);
            await copyTemplate('ci', folder);
            await copyTemplate(model, folder);
            await exec('npm install', folder);
            await exec('./configure --env dev --with-docker', folder);
        } catch (err) {
            return console.error(chalk.red(err.message));
        }

        console.log(chalk.green(`Done ! Go to ${folder}, make start and Enjoy ;)`));
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
