Reviews = require './Reviews'
Header  = require './Header'
me = require 'posts/me'

{div, header, h1, h3, p, strong, span, a, ul, li} = require 'lib/dom-helpers'

About = React.createClass
  render: ->
    console.log me
    div className: 'about content',
      div null,
        header className: 'content-header',
          div className: 'title',
            h1 'Web Consultant'
            h3 "There's no crying in web development! I'll take care of it!"
          div className: 'about-paragraph',
            div dangerouslySetInnerHTML: __html: me
        # div className:'reviews',
        #   ul null,
        #     li null,
        #       p 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        #       div className: "reviewer",
        #         strong 'Larry Page,'
        #         span 'CEO of '
        #         a href: 'http://google.com', 'Google Inc'
        #     li null,
        #       p 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        #       div className: "reviewer",
        #         strong 'Larry Page,'
        #         span 'CEO of '
        #         a href: 'http://google.com', 'Google Inc'
        #     li null,
        #       p 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        #       div className: "reviewer",
        #         strong 'Larry Page,'
        #         span 'CEO of '
        #         a href: 'http://google.com', 'Google Inc'
        #     li null,
        #       p 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        #       div className: "reviewer",
        #         strong 'Larry Page,'
        #         span 'CEO of '
        #         a href: 'http://google.com', 'Google Inc'

module.exports = About
