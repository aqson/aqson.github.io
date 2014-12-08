{State} = ReactRouter
{div, h1} = require 'lib/dom-helpers'

Post = React.createClass
  mixins: [State]
  getInitialState: ->
    {section, name} = @getParams()
    post: require "posts/#{section}/#{name}"

  render: ->
    div className: 'post content',
      div dangerouslySetInnerHTML: __html: @state.post

module.exports = Post
