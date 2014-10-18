{nav_items} = require 'config'
{Link} = ReactRouter

{div, nav, ul, li, h1, h3}  = require 'lib/dom-helpers'

Header = React.createClass
  render: ->
    navItems = nav_items.map (item) ->
      li null,
        Link to: item.path, item.name

    div className: 'header',
      div className: 'title',
        h1 Link to: 'app', 'ɣλ'
        #h3 'aqson'
      nav null,
        ul null,
          navItems

module.exports = Header
