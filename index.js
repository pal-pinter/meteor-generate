#!/usr/bin/env node

var program = require('commander');
var createApplication = require('./lib/function/create-application.js')

program
  .command('create [appName]')
  .alias('c')
  .description('Create meteor application')
  .option('-r, --reset', 'Remove existing application')
  .option('-t, --test', 'Remove existing application')
  .action(function(appName, options){
    createApplication(appName, options);
  });

program.parse(process.argv);
