Reviews = require './Reviews'

{div} = require 'lib/dom-helpers'

About = React.createClass
  render: ->
    div className: 'about',
      Reviews()

module.exports = About
