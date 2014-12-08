Reviews = require './Reviews'
{blog} = require 'config'
{div, h3, ul, li, a, span} = require 'lib/dom-helpers'
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
              " "
              unless post.external
                Link to: 'post', params: section: section.name, name: post.name, post.title
              else
                a href: post.url, post.title


    div className: 'posts content',
      if sections.length
        sections
      else
        h3 'No posts yet...'

module.exports = Posts
