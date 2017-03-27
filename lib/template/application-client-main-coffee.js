var createClientMainCoffee = function () {
  var template = `
###
  /client/main.coffee
###

DEBUG = true
console.log '/client/main.coffee is loaded' if DEBUG

require '/imports/startup/client/index.coffee'
  `
  return template
}

module.exports = createClientMainCoffee
