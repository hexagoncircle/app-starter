// less.js
const gulp = require('gulp')
const browserSync = require('browser-sync')
const plumber = require('../custom-modules/plumber')
const plugins = require('gulp-load-plugins')()
const config = require('../config')

// Task -- Less
gulp.task('less', () => {
  // Check for errors, create sourcemaps,
  // add vendor prefixes, and convert less to css
  return gulp.src(config.less.src)
    .pipe(plumber('Error Running Less'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less())
    .pipe(plugins.autoprefixer(config.autoprefixer))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(config.less.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
})
