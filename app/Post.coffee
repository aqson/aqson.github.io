{State} = ReactRouter
{div, h1} = require 'lib/dom-helpers'

Post = React.createClass
  mixins: [State]
  getInitialState: ->
    {name} = @getParams()
    post: require "posts/#{name}"

  render: ->
    div className: 'post content',
      div dangerouslySetInnerHTML: __html: @state.post

module.exports = Post
