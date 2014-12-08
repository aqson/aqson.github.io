Reviews = require './Reviews'
{blog} = require 'config'
{div, h1, ul, li, a, span} = require 'lib/dom-helpers'
{Link} = ReactRouter

format = (date) -> moment(date).format('D MMM, YYYY')


Posts = React.createClass
  render: ->
    sections = blog.sections.map (section) ->
      div className: 'blog-section',
        h1 section.title
        ul null,
          section.posts.map (post) ->
            li className: 'blog-post',
              span className: 'blog-post-date', format post.date
              unless post.external
                Link to: 'post', params: name: "#{section.name}/#{post.name}", post.title
              else
                a href: post.url, post.title

    div className: 'posts content', sections

module.exports = Posts
