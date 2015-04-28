routes = require 'routes'

$ ->
  ReactRouter.run routes, ReactRouter.HistoryLocation, (Handler) ->
    React.render React.createElement(Handler, null), document.body
