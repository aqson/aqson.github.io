Routes = require 'Routes'

$ ->
  ReactRouter.run Routes, ReactRouter.HistoryLocation, (Handler) ->
    React.render React.createElement(Handler, null), document.body
