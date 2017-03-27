var importsStartupServerIndex = function () {
  var template = `###
  /imports/startup/server/index.coffee
###

DEBUG = true
console.log '/imports/startup/server/index.coffee is loaded' if DEBUG

`
  return template
}

module.exports = importsStartupServerIndex
