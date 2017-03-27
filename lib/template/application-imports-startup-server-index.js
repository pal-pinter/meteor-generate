var createStartupServerIndexCoffee = function () {
  var template = `###
  /imports/startup/server/index.coffee
###

DEBUG = true
console.log '/imports/startup/server/index.coffee' if DEBUG

`
  return template
}

module.exports = createStartupServerIndexCoffee
