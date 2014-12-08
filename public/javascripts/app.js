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
var About, Header, Reviews, a, div, h1, h3, header, li, p, span, strong, ul, _ref;

Reviews = require('./Reviews');

Header = require('./Header');

_ref = require('lib/dom-helpers'), div = _ref.div, header = _ref.header, h1 = _ref.h1, h3 = _ref.h3, p = _ref.p, strong = _ref.strong, span = _ref.span, a = _ref.a, ul = _ref.ul, li = _ref.li;

About = React.createClass({
  render: function() {
    return div(null, div({
      className: 'spacer minimized'
    }), div({
      className: 'about'
    }, div({
      className: 'content'
    }, header({
      className: 'content-header'
    }, div({
      className: 'title'
    }, h1('Web Consultant'), h3("There's no crying in web development! I'll take care of it!"))), div({
      className: 'reviews'
    }, ul(null, li(null, p('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), div({
      className: "reviewer"
    }, strong('Larry Page,'), span('CEO of '), a({
      href: 'http://google.com'
    }, 'Google Inc'))), li(null, p('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), div({
      className: "reviewer"
    }, strong('Larry Page,'), span('CEO of '), a({
      href: 'http://google.com'
    }, 'Google Inc'))), li(null, p('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), div({
      className: "reviewer"
    }, strong('Larry Page,'), span('CEO of '), a({
      href: 'http://google.com'
    }, 'Google Inc'))), li(null, p('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), div({
      className: "reviewer"
    }, strong('Larry Page,'), span('CEO of '), a({
      href: 'http://google.com'
    }, 'Google Inc'))))))));
  }
});

module.exports = About;
});

;require.register("App", function(exports, require, module) {
var App, Header, Link, RouteHandler, State, block, config, div, downPosition, header, li, previous, upPosition, _ref, _ref1;

Header = require('./Header');

RouteHandler = ReactRouter.RouteHandler, Link = ReactRouter.Link, State = ReactRouter.State;

config = require('config');

previous = null;

block = false;

_ref = [76, 150], downPosition = _ref[0], upPosition = _ref[1];

_ref1 = require('lib/dom-helpers'), div = _ref1.div, header = _ref1.header, li = _ref1.li;

App = React.createClass({
  mixins: [State],
  getInitialState: function() {
    return {
      minimized: false
    };
  },
  componentWillMount: function() {
    return previous = document.body.scrollTop;
  },
  wheel: function(event) {
    var position,
      _this = this;
    if (block) {
      event.preventDefault();
    }
    position = document.body.scrollTop;
    if (previous < position && position > downPosition && !this.state.minimized) {
      block = true;
      setTimeout((function() {
        return block = false;
      }), 800);
      this.setState({
        minimized: true
      });
    } else if (previous > position && position < upPosition && this.state.minimized) {
      this.setState({
        minimized: false
      });
    }
    return previous = position;
  },
  render: function() {
    var check, minimized,
      _this = this;
    check = function(event) {
      if (_this.isActive('about')) {
        return _this.wheel(event);
      }
    };
    minimized = this.isActive('about') ? this.state.minimized : true;
    return div({
      className: 'app',
      onWheel: check
    }, Header({
      minimized: minimized
    }), div({
      className: "spacer " + (minimized ? 'minimized' : '')
    }), RouteHandler());
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
var Header, Link, div, h1, h3, header, img, li, nav, nav_items, ul, _ref;

nav_items = require('config').nav_items;

Link = ReactRouter.Link;

_ref = require('lib/dom-helpers'), div = _ref.div, header = _ref.header, nav = _ref.nav, ul = _ref.ul, li = _ref.li, h1 = _ref.h1, h3 = _ref.h3, img = _ref.img;

Header = React.createClass({
  render: function() {
    var navItems;
    navItems = nav_items.map(function(item) {
      return li(null, Link({
        to: item.to
      }, item.name));
    });
    return header({
      className: "header " + (this.props.minimized ? 'minimized' : '')
    }, div({
      className: "header-top"
    }, nav({
      className: "nav"
    }, ul(null, navItems))), div({
      className: "stars"
    }, div({
      className: "stars-big"
    }), div({
      className: "stars-medium"
    }), div({
      className: "stars-small"
    })), div({
      className: "clouds"
    }, img({
      className: "cloud",
      src: "/img/cloud.png"
    }), img({
      className: "cloud",
      src: "/img/cloud.png"
    }), img({
      className: "cloud",
      src: "/img/cloud.png"
    }), img({
      className: "cloud",
      src: "/img/cloud.png"
    }), img({
      className: "cloud",
      src: "/img/cloud.png"
    })), div({
      className: "title"
    }, h3('Artem'), h1('Yavorsky')), div({
      className: "header-bottom"
    }, img({
      className: "avatar",
      src: "/img/avatar.png"
    })));
  }
});

module.exports = Header;
});

;require.register("Posts", function(exports, require, module) {
var App, Reviews, div;

Reviews = require('./Reviews');

div = require('lib/dom-helpers').div;

App = React.createClass({
  render: function() {
    return div({
      className: 'posts'
    }, 123123123);
  }
});

module.exports = App;
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
var DefaultRoute, Route, first, mount, nav_items;

nav_items = require('config').nav_items;

Route = ReactRouter.Route, DefaultRoute = ReactRouter.DefaultRoute;

mount = function(name) {
  return require("./" + name);
};

first = nav_items[0];

module.exports = Route({
  path: '/',
  handler: mount('App')
}, Route({
  name: 'about',
  handler: mount('About')
}), Route({
  name: 'posts',
  handler: mount('Posts')
}));
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
    to: 'about',
    name: 'About'
  }, {
    to: 'posts',
    name: 'Posts'
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

$(function() {
  return ReactRouter.run(Routes, ReactRouter.HistoryLocation, function(Handler) {
    return React.render(React.createElement(Handler, null), document.body);
  });
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