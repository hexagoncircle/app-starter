// watch.js
const gulp = require('gulp')
const config = require('../config')

// Task -- Watch
gulp.task('watch', () => {
  gulp.watch(config.less.src, ['less'])
  gulp.watch(config.scripts.src, ['scripts'])
  gulp.watch(config.handlebars.src, ['handlebars'])
})
