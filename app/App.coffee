Header = require './Header'
{RouteHandler, Link, State} = ReactRouter
config = require 'config'
previous = null
block = false
[downPosition, upPosition] = [76, 150]

{div, header, li, span, a} = require 'lib/dom-helpers'


App = React.createClass
  mixins: [State]
  getInitialState: -> minimized: false
  componentWillMount: -> previous = document.body.scrollTop

  wheel: (event) ->
    event.preventDefault() if block
    position = document.body.scrollTop
    if previous < position and position > downPosition and !@state.minimized
      block = true
      setTimeout((=> block = false), 800)
      @setState minimized: true
    else if previous > position and position < upPosition and @state.minimized
      @setState minimized: false
    previous = position

  render: ->
    check = (event) => @wheel(event) if @isActive('about')
    minimized = if @isActive('about') then @state.minimized else true

    div className: 'app', onWheel: check,
      Header(minimized: minimized)
      div className: "spacer #{if minimized then 'minimized' else ''}"
      RouteHandler()
      div className: 'footer',
        span 'All content here is in '
        a href: 'http://creativecommons.org/publicdomain/zero/1.0/', 'public domain. '
        span 'An attribution would be nice though.'



module.exports = App
