#!/usr/bin/env node

var program = require('commander');
var shell = require('shelljs');
var _ = require('lodash')

const testFolder = '.';
const fs = require('fs');
list = fs.readdirSync(testFolder)

console.log(list)
program
  .version('0.0.1')
  .usage('<command> <argument>')
  .option('-c, --create [name]', 'Create meteor application name of [name]', 'name')

program.parse(process.argv);

msg = _.upperFirst('create application')
if (program.create) console.log(msg);
