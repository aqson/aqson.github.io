{nav_items} = require 'config'
{Link} = ReactRouter

{div, header, nav, ul, li, h1, h3, img}  = require 'lib/dom-helpers'

Header = React.createClass

  render: ->
    navItems = nav_items.map (item) ->
      li null,
        Link to: item.to, item.name

    header className: "header #{if @props.minimized then 'minimized' else ''}",
      div className: "header-top",
        nav className: "nav",
          ul null,
            navItems

      div className: "stars",
        div className: "stars-big"
        div className: "stars-medium"
        div className: "stars-small"

      div className: "clouds",
        img className: "cloud", src:"/img/cloud.png"
        img className: "cloud", src:"/img/cloud.png"
        img className: "cloud", src:"/img/cloud.png"
        img className: "cloud", src:"/img/cloud.png"
        img className: "cloud", src:"/img/cloud.png"

      div className: "title",
        h3 'Artie'
        h1 'Yavorsky'

      div className: "header-bottom",
        img className: "avatar", src:"/img/avatar.png"

module.exports = Header
