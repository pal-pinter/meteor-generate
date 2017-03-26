#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .usage('command name')
  .arguments('<cmd> [parameter]')
  .option('<cmd> [parameter]')
  .action(function (cmd, parameter) {
     cmdValue = cmd;
     parameterValue = parameter;
  });

program.parse(process.argv);

if (typeof cmdValue === 'undefined') {
   console.error('no command given!');
   program.help();
   process.exit(1);
}

if (typeof parameterValue === 'undefined') {
   console.error('missing parameter!');
   process.exit(1);
}

console.log('command:', cmdValue);
console.log('parameter:', parameterValue);
