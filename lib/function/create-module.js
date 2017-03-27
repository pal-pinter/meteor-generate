var fs = require('fs-extra')
var shell = require('shelljs');

// Initial module directory list
var dirStructure = [
  'client/config',
  'client/lib',
  'client/store',
  'i18n',
  'methods',
  'routes',
  'server/config',
  'server/lib',
  'server/publication'
]

var createModule = function (moduleName, options) {
  if (!fs.existsSync(`.meteor`)) {
    console.log('This is not a meteor application directory!')
    return
  }
  
  console.log('module creation started')
}

module.exports = createModule