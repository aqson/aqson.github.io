{me} = require 'config'
{div, ul, li, a, h1, span} = require 'lib/dom-helpers'

Reviews = React.createClass
  render: ->
    div className: 'contact content',
      h1 'Contact/follow me: '
      ul null,
        li null,
          span "#{me.email}"
        li null,
          a href: "mailto:#{me.email}", "Email"
          "/"
          a href: "imessage:#{me.email}", "iMessage"
          "/"
          a href: "facetime:#{me.email}", "Facetime"
        li null,
          a href: me.twitter, "Twitter"
        li null,
          a href: me.facebook, 'Facebook'
        li null,
          a href: me.vk, 'VK'


module.exports = Reviews
