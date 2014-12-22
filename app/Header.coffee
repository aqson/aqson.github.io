config = require 'config'
{me} = config
{Link} = ReactRouter

{div, header, nav, ul, li, a, h1, h3, img}  = require 'lib/dom-helpers'

Header = React.createClass
  getInitialState: -> avatar: false
  showAvatar: -> @setState avatar: true
  render: ->
    navItems = config.nav_items.map (item) ->
      li null,
        unless item.external
          Link to: item.to, item.name
        else
          a href: item.to, target: '_blank', item.name

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
        h3 me.first_name
        h1 me.last_name

      div className: "header-bottom #{if @state.avatar then 'visible'}",
        img className: "avatar", src: me.img_url, onLoad: @showAvatar

module.exports = Header
