{Route, DefaultRoute} = ReactRouter

mount = (name) -> require "./components/#{name}"

module.exports =
  Route path: '/', handler: mount('App'),
    Route name: 'posts',   handler: mount('Posts'), path: 'posts'
    Route name: 'post', handler: mount('Post'), path: 'posts/:section/:name'
    Route name: 'contact', handler: mount('Contact')
    DefaultRoute name: 'about',   handler: mount('About')
