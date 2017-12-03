// handlebars.js
const gulp = require('gulp')
const browserSync = require('browser-sync')
const plumber = require('../custom-modules/plumber')
const plugins = require('gulp-load-plugins')()
const config = require('../config')

gulp.task('handlebars', () => {

  let options = {
    debug: 0, // Output template information when task is run
    partials: config.handlebars.partials
    // helpers: config.handlebars.helpers,
    // data: config.handlebars.data
  }

  return gulp.src(config.handlebars.pages)
    .pipe(plumber('Error Compiling Handlebars'))
    .pipe(plugins.hb(options))
    .pipe(plugins.rename({
      extname: '.html'
    }))
    .pipe(gulp.dest(config.handlebars.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
})
