#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
console.log('**********************************************************************');
console.log('*      '+chalk.green('1、让项目从"搭建-开发-部署"更加快速以及规范')+'                   *');
console.log('*      '+chalk.green('2、避免创建项目时手动复制不全的尴尬')+'                           *');
console.log('**********************************************************************');
program
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('add', '添加新的源 xianzhi add {模板名称，地址(github.com是默认的)}')
  .command('delete', '删除源 xianzhi list')
  .command('list', '展示源列表 xianzhi list')
  .command('init', '从源初始化项目 xianzhi init <模板名> 项目名')
  .command('create-vue', '快速构建新vue项目 xianzhi create-vue <项目名>')

program.parse(process.argv)
