config = {}

config.me = {
  first_name: "Artem"
  last_name: "Yavorsky"
  img_url: "/img/avatar.png"
  twitter: "http://twitter.com/aqson"
  github: "http://github.com/yavorsky"
  facebook: "http://facebook.com/aqson"
  linkedin: "https://www.linkedin.com/profile/view?id=242811669"
  vk: "http://vk.com/aqson"
  email: "info@yavorsky.org"
}

config.nav_items = [
  {to: 'about', name: 'About'}
  {to: 'posts', name: 'Posts'}
  {to: config.me.github, name: 'Github', external: true}
  {to: 'contact', name: 'Contact'}
]

config.reviews = [
  {body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', autor: {name: 'Hurry Cane', role: 'CTO Ciclum'}}
]

config.blog =
  sections: [
    # {
    #   name: 'liberty'
    #   title: 'Liberty'
    #   posts: [
    #     {name: 'first_post', title: 'First post Test one two trhee', date: "2015-02-03T16:15:00.000Z"}
    #   ]
    # },
    # {
    #   name: 'law'
    #   title: 'Law'
    #   posts: [
    #     {name: 'first_post', title: 'Law Law Law', date: "2015-02-03T16:15:00.000Z"}
    #   ]
    # }

  ]


config.v = 0.1

module.exports = config
