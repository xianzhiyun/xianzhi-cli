#!/usr/bin/env node
const qrcode = require('qrcode-terminal')
const program = require('commander')
const chalk = require('chalk')
const weixin = 'http://weixin.qq.com/r/-0hyajPEDm5xrXcJ9x3t';
let printQrcode = () => {
    return new Promise((resolve) => {
        qrcode.generate(weixin, {small: true},  function (res) {
            resolve(res)
        });
    })
}

console.log('**********************************************************************');
console.log('*      '+chalk.green('扫描她，带走我')+'                   *');
console.log('*      '+chalk.green('公众号：先知云')+'                   *');
(async () => {
    let res = await printQrcode()
    console.log(res)
})()
console.log('**********************************************************************');
program
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('add', '添加新的源 xianzhi add {模板名称，地址(github.com是默认的)}')
  .command('delete', '删除源 xianzhi list')
  .command('list', '展示源列表 xianzhi list')
  .command('init', '从源初始化项目 xianzhi init <模板名> 项目名')
  .command('create', '快速构建新vue项目 xianzhi create <项目名>')

program.parse(process.argv)
