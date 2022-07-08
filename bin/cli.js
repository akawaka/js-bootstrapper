#!/usr/bin/env node
const { exists, copyTemplate, exec, execScript } = require('../src/utils');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');

yargs(hideBin(process.argv))
    .command('create <folder>', 'Create new JavaScript project', (yargs) => {
        return yargs.positional('folder', { describe: 'Folder for project' });
    }, async ({ model, css, folder }) => {
        console.log(chalk.green(`Installing ${model} project into ${folder} ...`));

        try {
            await exists(folder);
            await copyTemplate('common', folder);
            await copyTemplate('ci', folder);
            await execScript('preProcess.js', { model, css, folder });
            await copyTemplate(model, folder);
            await copyTemplate(css, folder);
            await execScript('postProcess.js', { model, css, folder });
        } catch (err) {
            return console.error(chalk.red(err.message));
        }

        console.log(chalk.green(`Done ! Go to ${folder}, make start and Enjoy ;)`));
    })
    .option('model', {
        alias: 'm',
        type: 'string',
        description: 'Model to use',
        default: 'vanilla',
        choices: ['vanilla', 'vue2', 'vue', 'react'],
    })
    .option('css', {
        alias: 'c',
        type: 'string',
        description: 'CSS Framework to use',
        default: 'css',
        choices: ['css', 'tailwind', 'bootstrap'],
    })
    .demandCommand(1)
    .parse()
;
