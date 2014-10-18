Reviews = require './Reviews'

{div} = require 'lib/dom-helpers'

App = React.createClass
  render: ->
    div className: 'about',
      Reviews()

module.exports = App
