fs = require('fs-extra')

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
  
  // Create directory structure with .gitkeep files
  dirStructure.forEach(function(item) {
    file = './' + appName + '/' + item + '/.gitkeep'
    console.log(file);
    //fs.outputFileSync(file, '');
  });
  
  return true
}

module.exports = createApplication