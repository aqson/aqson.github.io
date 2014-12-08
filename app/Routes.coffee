{nav_items} = require 'config'

{Route, DefaultRoute} = ReactRouter

mount = (name) -> require "./#{name}"

first = nav_items[0]

module.exports =
  Route path: '/', handler: mount('App'),
    Route name: 'about',   handler: mount('About')
    Route name: 'posts',   handler: mount('Posts')
    Route name: 'post', handler: mount('Post'), path: 'post/:name'
    #Route name: 'contact', handler: mount('Contact')

    # nav_items.map (item) ->
    #   {path, handler} = item
    #   Route name: path, path: path, handler: mount(handler)
    #DefaultRoute handler: mount(first.handler)
