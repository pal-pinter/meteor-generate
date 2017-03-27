#!/usr/bin/env node

var program = require('commander');
var createApplication = require('./lib/function/create-application.js')
var createModule = require('./lib/function/create-module.js')

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

program
  .command('module [moduleName]')
  .alias('m')
  .description('Create application module')
  .option('-r, --reset', 'Remove existing module first')
  .action(function(moduleName, options){
    createModule(moduleName, options);
  });

program.parse(process.argv);
