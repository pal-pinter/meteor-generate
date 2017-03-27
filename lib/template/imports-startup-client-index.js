var importsStartupClientIndex = function () {
  var template = `###
  /imports/startup/client/index.coffee
###

DEBUG = true
console.log '/imports/startup/client/index.coffee is loaded' if DEBUG

`
  return template
}

module.exports = importsStartupClientIndex
