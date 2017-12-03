// scripts.js
var gulp = require('gulp')
var merge = require('merge-stream')
var browserSync = require('browser-sync')
var plumber = require('../custom-modules/plumber')
var plugins = require('gulp-load-plugins')()
var config = require('../config')

// Task -- Scripts
gulp.task('scripts', () => {
  // Check for errors, create sourcemaps,
  // and concatenate scripts

  return gulp.src(config.scripts.src)
  .pipe(plumber('Error Running Scripts'))
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.concat(config.scripts.file))
  .pipe(plugins.sourcemaps.write())
  .pipe(gulp.dest(config.scripts.dest))
  .pipe(browserSync.reload({
    stream: true
  }))
})
