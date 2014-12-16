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
var About, Header, Reviews, a, div, h1, h3, header, li, me, p, span, strong, ul, _ref;

Reviews = require('./Reviews');

Header = require('./Header');

me = require('posts/me');

_ref = require('lib/dom-helpers'), div = _ref.div, header = _ref.header, h1 = _ref.h1, h3 = _ref.h3, p = _ref.p, strong = _ref.strong, span = _ref.span, a = _ref.a, ul = _ref.ul, li = _ref.li;

About = React.createClass({
  render: function() {
    console.log(me);
    return div({
      className: 'about content'
    }, div(null, header({
      className: 'content-header'
    }, div({
      className: 'title'
    }, h1('Web Consultant'), h3("There's no crying in web development! I'll take care of it!")), div({
      className: 'about-paragraph'
    }, div({
      dangerouslySetInnerHTML: {
        __html: me
      }
    })))));
  }
});

module.exports = About;
});

;require.register("App", function(exports, require, module) {
var App, Header, Link, RouteHandler, State, a, block, config, div, downPosition, header, li, previous, span, upPosition, _ref, _ref1;

Header = require('./Header');

config = require('config');

previous = null;

block = false;

RouteHandler = ReactRouter.RouteHandler, Link = ReactRouter.Link, State = ReactRouter.State;

_ref = [76, 150], downPosition = _ref[0], upPosition = _ref[1];

_ref1 = require('lib/dom-helpers'), div = _ref1.div, header = _ref1.header, li = _ref1.li, span = _ref1.span, a = _ref1.a;

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
    }), div({
      className: 'main'
    }, RouteHandler(), div({
      className: 'footer'
    }, span('All content here is in '), a({
      href: 'http://creativecommons.org/publicdomain/zero/1.0/'
    }, 'public domain. '), span('An attribution would be nice though.'))));
  }
});

module.exports = App;
});

;require.register("Contact", function(exports, require, module) {
var Reviews, a, div, h1, li, link, me, span, ul, _ref;

me = require('config').me;

_ref = require('lib/dom-helpers'), div = _ref.div, ul = _ref.ul, li = _ref.li, a = _ref.a, h1 = _ref.h1, span = _ref.span;

link = function(url, name) {
  return a({
    target: '_blank',
    href: url
  }, name);
};

Reviews = React.createClass({
  render: function() {
    return div({
      className: 'contact content'
    }, h1('Contact/follow me: '), ul(null, li(null, span("" + me.email)), li(null, link("mailto:" + me.email, "Email"), "/", link("imessage:" + me.email, "iMessage"), "/", link("facetime:" + me.email, "Facetime")), li(null, link(me.twitter, "Twitter")), li(null, link(me.linkedin, "LinkedIn")), li(null, link(me.facebook, 'Facebook')), li(null, link(me.vk, 'VK'))));
  }
});

module.exports = Reviews;
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
var Header, Link, a, config, div, h1, h3, header, img, li, me, nav, ul, _ref;

config = require('config');

me = config.me;

Link = ReactRouter.Link;

_ref = require('lib/dom-helpers'), div = _ref.div, header = _ref.header, nav = _ref.nav, ul = _ref.ul, li = _ref.li, a = _ref.a, h1 = _ref.h1, h3 = _ref.h3, img = _ref.img;

Header = React.createClass({
  render: function() {
    var navItems;
    navItems = config.nav_items.map(function(item) {
      return li(null, !item.external ? Link({
        to: item.to
      }, item.name) : a({
        href: item.to,
        target: '_blank'
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
    }, h3(me.first_name), h1(me.last_name)), div({
      className: "header-bottom"
    }, img({
      className: "avatar",
      src: me.img_url
    })));
  }
});

module.exports = Header;
});

;require.register("Post", function(exports, require, module) {
var Post, State, div, h1, _ref;

State = ReactRouter.State;

_ref = require('lib/dom-helpers'), div = _ref.div, h1 = _ref.h1;

Post = React.createClass({
  mixins: [State],
  getInitialState: function() {
    var name, section, _ref1;
    _ref1 = this.getParams(), section = _ref1.section, name = _ref1.name;
    return {
      post: require("posts/" + section + "/" + name)
    };
  },
  render: function() {
    return div({
      className: 'post content'
    }, div({
      dangerouslySetInnerHTML: {
        __html: this.state.post
      }
    }));
  }
});

module.exports = Post;
});

;require.register("Posts", function(exports, require, module) {
var Link, Posts, Reviews, a, blog, div, format, h3, li, span, ul, _ref;

Reviews = require('./Reviews');

blog = require('config').blog;

_ref = require('lib/dom-helpers'), div = _ref.div, h3 = _ref.h3, ul = _ref.ul, li = _ref.li, a = _ref.a, span = _ref.span;

Link = ReactRouter.Link;

format = function(date) {
  return moment(date).format('D MMM, YYYY');
};

Posts = React.createClass({
  render: function() {
    var sections;
    sections = blog.sections.map(function(section) {
      return div({
        className: 'blog-section'
      }, h1(section.title), ul(null, section.posts.map(function(post) {
        return li({
          className: 'blog-post'
        }, span({
          className: 'blog-post-date'
        }, format(post.date)), " ", !post.external ? Link({
          to: 'post',
          params: {
            section: section.name,
            name: post.name
          }
        }, post.title) : a({
          href: post.url
        }, post.title));
      })));
    });
    return div({
      className: 'posts content'
    }, sections.length ? sections : h3('No posts yet...'));
  }
});

module.exports = Posts;
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
  name: 'posts',
  handler: mount('Posts'),
  path: 'posts'
}), Route({
  name: 'post',
  handler: mount('Post'),
  path: 'posts/:section/:name'
}), Route({
  name: 'contact',
  handler: mount('Contact')
}), DefaultRoute({
  name: 'about',
  handler: mount('About')
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

config.me = {
  first_name: "Artem",
  last_name: "Yavorsky",
  img_url: "/img/avatar.png",
  twitter: "http://twitter.com/aqson",
  github: "http://github.com/yavorsky",
  facebook: "http://facebook.com/aqson",
  linkedin: "https://www.linkedin.com/profile/view?id=242811669",
  vk: "http://vk.com/aqson",
  email: "info@yavorsky.org"
};

config.nav_items = [
  {
    to: 'about',
    name: 'About'
  }, {
    to: 'posts',
    name: 'Posts'
  }, {
    to: config.me.github,
    name: 'Github',
    external: true
  }, {
    to: 'contact',
    name: 'Contact'
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

config.blog = {
  sections: []
};

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

;require.register("posts/law/first_post", function(exports, require, module) {
var __templateData = "<h1 id=\"111\">111</h1>\n<h1 id=\"sdasd\">sdasd</h1>\n<p>asd\nasdasd\nasdas</p>\n";
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("posts/liberty/first_post", function(exports, require, module) {
var __templateData = "<h1 id=\"111\">111</h1>\n<h1 id=\"111\">111</h1>\n<h1 id=\"111\">111</h1>\n<h1 id=\"111\">111</h1>\n<h1 id=\"111\">111</h1>\n<h1 id=\"111\">111</h1>\n<h1 id=\"111\">111</h1>\n<h1 id=\"111\">111</h1>\n<h1 id=\"111\">111</h1>\n";
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("posts/me", function(exports, require, module) {
var __templateData = "<p>Hi, I am Artem Yavorsky (sometimes aqson) - <strong>web consultant</strong> with 3 years of experience.</p>\n<p>I love <strong>useful projects</strong>. I don&#39;t like useless work even if it helps to bring money.</p>\n<p>I am <strong>full-stack developer</strong>. I can work as a front-end using javascript/coffeescript with many frameworks, so back-end, especially, using Ruby(Rails/Sinatra), Node.js and Go. Also, I am able to help with iOS projects using Swift.</p>\n<p>I am <strong>contributor</strong> in some huge open-source projects like <a href=\"https://github.com/hellyeahllc/exim\">Exim</a> and <a href=\"http://yang.github.io/reactive-coffee\">Reactive-coffee</a>.</p>\n<p>Currently, I am working with awesome team - <a href=\"http://hellyeah.is\">Hellyeah</a>. We solve problems related to online businesses and make open-source.</p>\n<p>I am traveling, learning law, playing football and love my beautiful girlfriend.</p>\n<p>Follow me on <a href=\"https://twitter.com/aqson\">twitter</a> and <a href=\"https://github.com/yavorsky\">github</a> or <a href=\"contact\">contact</a> me for fruitful cooperation.</p>\n";
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//# sourceMappingURL=app.js.map