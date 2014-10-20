(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("About", function(exports, require, module) {
var About, Reviews, div;

Reviews = require('./Reviews');

div = require('lib/dom-helpers').div;

About = React.createClass({
  render: function() {
    return div({
      className: 'about'
    }, Reviews());
  }
});

module.exports = About;
});

;require.register("App", function(exports, require, module) {
var App, Header, div;

Header = require('./Header');

div = require('lib/dom-helpers').div;

App = React.createClass({
  render: function() {
    return div({
      className: 'app'
    }, Header(), this.props.activeRouteHandler());
  }
});

module.exports = App;
});

;require.register("Blog", function(exports, require, module) {
var App, Reviews, div;

Reviews = require('./Reviews');

div = require('lib/dom-helpers').div;

App = React.createClass({
  render: function() {
    return div({
      className: 'about'
    }, Reviews());
  }
});

module.exports = App;
});

;require.register("Footer", function(exports, require, module) {
var Footer, Link, div;

Link = ReactRouter.Link;

div = require('lib/dom-helpers').div;

Footer = React.createClass({
  render: function() {
    return div({
      className: 'footer'
    });
  }
});

module.exports = Footer;
});

;require.register("Header", function(exports, require, module) {
var Header, Link, div, h1, h3, li, nav, nav_items, ul, _ref;

nav_items = require('config').nav_items;

Link = ReactRouter.Link;

_ref = require('lib/dom-helpers'), div = _ref.div, nav = _ref.nav, ul = _ref.ul, li = _ref.li, h1 = _ref.h1, h3 = _ref.h3;

Header = React.createClass({
  render: function() {
    var navItems;
    navItems = nav_items.map(function(item) {
      return li(null, Link({
        to: item.path
      }, item.name));
    });
    return div({
      className: 'header'
    }, div({
      className: 'title'
    }, h1(Link({
      to: 'app'
    }, 'ɣλ'))), nav(null, ul(null, navItems)));
  }
});

module.exports = Header;
});

;require.register("Reviews", function(exports, require, module) {
var Reviews, div, i, li, reviews, span, ul, _ref;

reviews = require('config').reviews;

_ref = require('lib/dom-helpers'), div = _ref.div, ul = _ref.ul, li = _ref.li, span = _ref.span, i = _ref.i;

reviews = reviews.map(function(review) {
  return li({
    className: 'review'
  }, div({
    className: 'review-body'
  }, review.body), div({
    className: 'review-autor'
  }, div({
    className: 'review-autor-name'
  }, review.autor.name), div({
    className: 'review-autor-role'
  }, review.autor.role)));
});

Reviews = React.createClass({
  render: function() {
    return div({
      className: 'reviews'
    }, ul(null, reviews));
  }
});

module.exports = Reviews;
});

;require.register("Routes", function(exports, require, module) {
var DefaultRoute, Route, Routes, first, nav_items, routes;

nav_items = require('config').nav_items;

Routes = ReactRouter.Routes, Route = ReactRouter.Route, DefaultRoute = ReactRouter.DefaultRoute;

routes = nav_items.map(function(item) {
  return Route({
    name: item.path,
    path: item.path,
    handler: require(item.handler)
  });
});

first = nav_items[0];

module.exports = Routes({
  location: 'history'
}, Route({
  name: 'app',
  path: '/',
  handler: require('./App')
}, routes, DefaultRoute({
  handler: require(first.handler)
})));
});

;require.register("Works", function(exports, require, module) {
var App, Reviews, div;

Reviews = require('./Reviews');

div = require('lib/dom-helpers').div;

App = React.createClass({
  render: function() {
    return div({
      className: 'about'
    }, Reviews());
  }
});

module.exports = App;
});

;require.register("config", function(exports, require, module) {
var config;

config = {};

config.nav_items = [
  {
    path: 'about',
    name: 'about',
    handler: './About'
  }, {
    path: 'works',
    name: 'works',
    handler: './Works'
  }, {
    path: 'blog',
    name: 'blog',
    handler: './Blog'
  }, {
    path: 'contact',
    name: 'contact',
    handler: './Blog'
  }
];

config.reviews = [
  {
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    autor: {
      name: 'Hurry Cane',
      role: 'CTO Ciclum'
    }
  }
];

config.v = 0.1;

module.exports = config;
});

;require.register("initialize", function(exports, require, module) {
var Routes;

Routes = require('Routes');

jQuery(function() {
  return React.renderComponent(Routes, document.body);
});
});

;require.register("lib/dom-helpers", function(exports, require, module) {
var tag, tagName, _fn,
  __slice = [].slice;

tag = function() {
  var args, attributes, name, _ref, _ref1;
  name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  if (((_ref = args[0]) != null ? _ref.constructor : void 0) === Object) {
    attributes = args.shift();
  } else {
    attributes = {};
  }
  return (_ref1 = React.DOM)[name].apply(_ref1, [attributes].concat(__slice.call(args)));
};

_fn = function(tagName) {
  return exports[tagName] = tag.bind(this, tagName);
};
for (tagName in React.DOM) {
  _fn(tagName);
}

exports['icon'] = function(icon) {
  return React.DOM.i({
    className: "fa fa-" + icon
  });
};

exports['iconed'] = function(icon, content) {
  return [exports['icon'](icon), content];
};
});

;
//# sourceMappingURL=app.js.map