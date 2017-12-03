// config.js
// All gulp task configuration constiables are created in this file.

// Paths -- Root Directories
const appSrc = './app/'
const buildSrc = './build/'
const gulpSrc = './gulp/'

// Task Configuration
let config = {
  // BrowserSync
  browserSync: {
    server: {
      baseDir: buildSrc,
      open: false,
      serveStaticOptions: {
        extensions: ['html']
      }
    },
  },

  // Less CSS
  less: {
    src: appSrc + 'css/**/*.less',
    dest: buildSrc + 'css',
    options: {
      includePaths: [
        'app/bower_components',
        'node_modules'
      ]
    },
    autoprefixer: {
      browser: ['ie 8-9', 'last 2 versions'],
      remove: false
    }
  },

  // Scripts
  scripts: {
    src: appSrc + 'js/**/*.js',
    dest: buildSrc + 'js',
    file: 'index.js',
  },

  // Handlebars
  handlebars: {
    src: appSrc + 'views/**/*.hbs',
    pages: appSrc + 'views/pages/**/*.hbs',
    partials: appSrc + 'views/partials/**/*.hbs',
    dest: buildSrc
  },
}

// Export Configuration
module.exports = config
