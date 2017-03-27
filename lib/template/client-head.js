var clientHead = function (appName) {
  var head = `head
  meta(charset="utf-8")
  meta(http-equiv="X-UA-Compatible", content="IE=edge")
  meta(http-equiv="content-language", content="hu")
  meta(name="viewport", content="width=device-width, initial-scale=1")
  meta(name="fragment", content="!")
  title ${appName}

`
  return head
}

module.exports = clientHead
