Reviews = require './Reviews'

{div} = require 'lib/DOM'

App = React.createClass
  render: ->
    div className: 'about',
      Reviews()

module.exports = App
