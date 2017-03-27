#!/usr/bin/env node

var program = require('commander');

program
  .command('create [appName]')
  .alias('c')
  .description('run setup commands for all envs')
  .action(function(appName, options){
    console.log('create "%s" meteor application', appName);
  });

program.parse(process.argv);
