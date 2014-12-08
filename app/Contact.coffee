{me} = require 'config'
{div, ul, li, a, h1} = require 'lib/dom-helpers'

Reviews = React.createClass
  render: ->
    div className: 'contact content',
      h1 'Contact me: '
      ul null,
        li null,
          a href: "mailto:#{me.email}", "#{me.email}"
        li null,
          a href: me.twitter, "Twitter/aqson",
        li null,
          a href: me.facebook, 'Facebook/aqson'


module.exports = Reviews
