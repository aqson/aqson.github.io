config = {}

config.nav_items = [
  {to: 'about', name: 'About'}
  {to: 'posts', name: 'Posts'}
#  {to: 'contact', name: 'contact', handler: 'Contact'}
#  {path: 'blog', name: 'Blog', handler: './Blog'}
#  {path: 'works', name: 'Works', handler: './Works'}
#  {path: 'contact', name: 'Contact', handler: './Contact'}
]

config.reviews = [
  {body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', autor: {name: 'Hurry Cane', role: 'CTO Ciclum'}}
]

config.blog =
  sections: [
    {
      name: 'liberty'
      title: 'Liberty'
      posts: [
        {name: 'first_post', title: 'First post', date: "2015-02-03T16:15:00.000Z"}
        {name: 'second_post', title: 'Second post', date: "2015-02-13T16:15:00.000Z"}
      ]
    },
    {
      name: 'tech'
      title: 'Tech'
      posts: [
        {url: 'http://paulmillr.com/posts/usa-presidents-history/', title: 'External post', external: true, date: "2015-02-13T16:15:00.000Z"}
        {name: 'second_post', title: 'Second post', date: "2015-02-13T16:15:00.000Z"}
      ]
    }
  ]


config.v = 0.1

module.exports = config
