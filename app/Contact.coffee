{me} = require 'config'
{div, ul, li, a, h1, span} = require 'lib/dom-helpers'

link = (url, name) -> a target: '_blank', href: url, name

Reviews = React.createClass
  render: ->
    div className: 'contact content',
      h1 'Contact/follow me: '
      ul null,
        li null,
          span "#{me.email}"
        li null,
          link "mailto:#{me.email}", "Email"
          "/"
          link "imessage:#{me.email}", "iMessage"
          "/"
          link "facetime:#{me.email}", "Facetime"
        li null,
          link me.twitter, "Twitter"
        li null,
          link me.linkedin, "LinkedIn"
        li null,
          link me.facebook, 'Facebook'
        li null,
          link me.vk, 'VK'


module.exports = Reviews
