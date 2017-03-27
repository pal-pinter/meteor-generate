#!/usr/bin/env node

var program = require('commander');
var createApplication = require('./lib/function/create-application.js')

program
  .command('create [appName]')
  .alias('c')
  .description('Create meteor application')
  .option('-r, --reset', 'Remove existing application')
  .option('-d, --dirs', 'Create only dirs and files')
  .option('-a, --app', 'Create only meteor app without dirs and files')
  .action(function(appName, options){
    createApplication(appName, options);
  });

program.parse(process.argv);
