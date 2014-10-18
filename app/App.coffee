Header = require './Header'

{div} = require 'lib/dom-helpers'

App = React.createClass
  render: ->
    div className: 'app',
      Header()
      @props.activeRouteHandler()

module.exports = App
