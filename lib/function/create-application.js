var fs = require('fs-extra')
var shell = require('shelljs');
var createHead = require('../template/application-client-head.js')
var createClientMainCoffee = require('../template/application-client-main-coffee.js')
var createServerMainCoffee = require('../template/application-server-main-coffee.js')

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
  fs.outputFileSync('client/head.jade', createHead(appName));
  fs.outputFileSync('client/main.coffee', createClientMainCoffee());
  fs.outputFileSync('server/main.coffee', createServerMainCoffee());

  return true
}

module.exports = createApplication