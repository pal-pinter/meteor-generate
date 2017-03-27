#!/usr/bin/env node

var program = require('commander');
var createApplication = require('./lib/function/create-application.js')

program
  .command('create [appName]')
  .alias('c')
  .description('Create meteor application')
  .action(function(appName, options){
    createApplication(appName);
  });

program.parse(process.argv);
