# https://github.com/atom/reactionary/blob/master/src/dom-helpers.coffee

tag = (name, args...) ->
  if args[0]?.constructor is Object
    attributes = args.shift()
  else
    attributes = {}

  React.DOM[name](attributes, args...)

for tagName of React.DOM
  do (tagName) -> exports[tagName] = tag.bind(@, tagName)

exports['icon'] = (icon) -> React.DOM.i className: "fa fa-#{icon}"

exports['iconed'] = (icon, content) -> [exports['icon'](icon), content]
