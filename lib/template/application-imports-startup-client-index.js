var createStartupClientIndexCoffee = function () {
  var template = `###
  /imports/startup/client/index.coffee
###

DEBUG = true
console.log '/imports/startup/client/index.coffee' if DEBUG

`
  return template
}

module.exports = createStartupClientIndexCoffee
