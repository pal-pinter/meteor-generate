var fs = require('fs-extra')
var shell = require('shelljs');
var clientHead = require('../template/client-head.js')
var clientMain = require('../template/client-main.js')
var serverMain = require('../template/server-main.js')
var importsStartupClientIndex = require('../template/imports-startup-client-index.js')
var importsStartupServerIndex = require('../template/imports-startup-server-index.js')

// Add suitable atmosphere packages
atmospherePackages = [
  'coffeescript',
  'stylus',
  'pacreach:jade',
  'jagi:astronomy',
  'manuel:viewmodel'
]

// Initial application directory list
var dirStructure = [
  'client',
  'client/compatibility',
  'client/css',
  'imports',
  'imports/api',
  'imports/startup',
  'imports/startup/client',
  'imports/startup/server',
  'imports/ui',
  'packages',
  'private',
  'public',
  'server'
]

var createApplication = function (appName) {
  
  // Create meteor app
  //shell.exec(`meteor create ${appName} --bare`)
  shell.cd(`${appName}`)
  //shell.exec('yarn')  

  // Add suitable packages
  //atmospherePackages.forEach(function(item) {
  //  shell.exec(`meteor add ${item}`)
  //});

  // Create directory structure with .gitkeep files
  //dirStructure.forEach(function(item) {
  //  file = `./${item}/.gitkeep`
  //  fs.outputFileSync(file, '');
  //});

  // Create main files from templates
  fs.outputFileSync('client/head.jade', clientHead(appName));
  fs.outputFileSync('client/main.coffee', clientMain());
  fs.outputFileSync('client/main.styl', `@import '{}/imports/startup/client/index.styl'`);
  fs.outputFileSync('server/main.coffee', serverMain());
  fs.outputFileSync('imports/startup/client/index.coffee', importsStartupClientIndex());
  fs.outputFileSync('imports/startup/client/index.styl', `// Main stylus index file`);
  fs.outputFileSync('imports/startup/server/index.coffee', importsStartupServerIndex());
  return true
}

module.exports = createApplication