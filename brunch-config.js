module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /.*scss$/
      }
    }
  },

  plugins: {
    babel: {
      presets: ['es2015']
    },
    autoReload: {
      match: {
        stylesheets: ['*.css', '*.jpg', '*.png', '*.scss'],
        javascripts: ['*.js'],
        templates: ['*.pug']
      },
    },
    sass: {
      mode: 'native',
      options: {
        includePaths: [
          'node_modules/system-font-css',
          'node_modules/gutenberg-web-type/src/style',
          'node_modules/ibm-design-colors',
        ],
      },
    },
    pug: {
      pretty: true,
      locals: {
        appName: 'My App'
      },
      globals: ['App'],
      pugRuntime: require('path').resolve('.', 'vendor', 'pug_runtime.js')
    }
  }
}
