exports.config =

  files:

    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(?!app)/

    stylesheets:
      joinTo: 'stylesheets/app.css'

    templates:
      joinTo: 'javascripts/app.js'

  plugins:

    stylus:
      imports: ['nib']

    autoprefixer:
      browsers: ["last 3 versions", "> 1%", "ie 8", "ie 9"]
      cascade: false
