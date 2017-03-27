var createServerMainCoffee = function () {
  var template = `
###
  /server/main.coffee
###

DEBUG = true
console.log '/server/main.coffee is loaded' if DEBUG

require '/imports/startup/server/index.coffee'
  `
  return template
}

module.exports = createServerMainCoffee
