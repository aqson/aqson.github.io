{nav_items} = require 'config'

{Routes, Route, DefaultRoute} = ReactRouter

routes = nav_items.map (item) ->
  Route name: item.path, path: item.path, handler: require(item.handler)
first = nav_items[0]


module.exports =
  Routes location: 'history',
    Route name: 'app', path: '/', handler: require('./App'),
      routes
      DefaultRoute handler: require(first.handler)
