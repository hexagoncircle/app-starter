// minifyCss.js
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const plumber = require('../custom-modules/plumber')
const plugins = require('gulp-load-plugins')()
const config = require('../config')

// Task -- Minify CSS
gulp.task('minifycss', () => {
  return gulp.src(config.minifyCss.src)
    .pipe(plumber('Error Minifying CSS'))
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.minifyCss.dest))
})
