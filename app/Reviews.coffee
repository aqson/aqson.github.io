{reviews} = require 'config'

{div, ul, li, span, i} = require 'lib/dom-helpers'

reviews = reviews.map (review) ->
  li className: 'review',
    div className: 'review-body', review.body
    div className: 'review-autor',
      div className: 'review-autor-name', review.autor.name
      div className: 'review-autor-role', review.autor.role

Reviews = React.createClass
  render: ->
    div className: 'reviews',
      ul null,
        reviews


module.exports = Reviews
