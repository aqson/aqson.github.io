Reviews = require './Reviews'
Header  = require './Header'
me = require 'posts/me'

{div, img, header, h1, h3, p, strong, span, a, ul, li} = require 'lib/DOM'

About = React.createClass
  render: ->
    div className: 'about content',
      div null,
        header className: 'content-header',
          div className: 'title',
            h1 'Software Developer'
            a target: '_blank', href: 'http://hellyeah.is', 
              img src: 'http://hellyeah.is/assets/images/logo.png'
          div className: 'about-paragraph',
            div dangerouslySetInnerHTML: __html: me


module.exports = About
