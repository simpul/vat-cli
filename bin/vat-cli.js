#!/usr/bin/env node

const Promise = require('bluebird');
const ora = require('ora');
const spinner = ora('Downloading template...');
const rm = require('rimraf').sync;
const chalk = require('chalk');

const path = require('path');
const fs = require('fs');

const download = Promise.promisify(require('../lib/download'));
const inquirerFn = require('../lib/inquirer');
const rewrite = require('../lib/rewrite');

inquirerFn().then(answers => {
  const projectName = answers.name;
  const destDir = process.cwd();
  const projectDir = path.join(destDir, projectName);

  // 检查是否已存在项目
  if (fs.existsSync(projectDir)) {
    return console.log(chalk.red(`project '${projectName}' already exists`));
  }
  
  // 开始下载模版文件
  spinner.start();
  download(projectDir)
    .then(async () => {
      await rewrite(projectDir, answers);
      spinner.succeed();
      console.log(chalk.green('\nsuccess to download the template.'));
    })
    .catch(err => {
      spinner.fail();
      console.log(chalk.red('\nfail to download the template.'), '\n', err);
      rm(projectDir);
    });

})