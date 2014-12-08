Reviews = require './Reviews'
Header  = require './Header'

{div, header, h1, h3, p, strong, span, a, ul, li} = require 'lib/dom-helpers'

# var prev = document.body.scrollTop;
#     var block = false;
#     var minimized = false;
#     $('.header, .spacer').removeClass('minimized')
#     $(window).on('mousewheel', function (e) {
#       console.log(event)
#       if (block) e.preventDefault()
#       var pos = document.body.scrollTop
#       var scrollDownChangePosition = 76;
#       var scrollUpChangePosition = 150;
#       //scrollDown
#       if (prev < pos && pos > scrollDownChangePosition && !minimized) {
#         $('.header, .spacer').addClass('minimized')
#         minimized = true
#         block = true
#         setTimeout(function(){block = false}, 800);
#       //ScrollUp
#       } else if (prev > pos && pos < scrollUpChangePosition && minimized) {
#         $('.header, .spacer').removeClass('minimized')
#         minimized = false
#       }
#       prev = pos
#     })


About = React.createClass
  render: ->
    div null,
      div className: 'spacer minimized'
      div className: 'about',
        div className: 'content',
          header className: 'content-header',
            div className: 'title',
              h1 'Web Consultant'
              h3 "There's no crying in web development! I'll take care of it!"
          div className:'reviews',
            ul null,
              li null,
                p 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                div className: "reviewer",
                  strong 'Larry Page,'
                  span 'CEO of '
                  a href: 'http://google.com', 'Google Inc'
              li null,
                p 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                div className: "reviewer",
                  strong 'Larry Page,'
                  span 'CEO of '
                  a href: 'http://google.com', 'Google Inc'
              li null,
                p 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                div className: "reviewer",
                  strong 'Larry Page,'
                  span 'CEO of '
                  a href: 'http://google.com', 'Google Inc'
              li null,
                p 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                div className: "reviewer",
                  strong 'Larry Page,'
                  span 'CEO of '
                  a href: 'http://google.com', 'Google Inc'

module.exports = About
