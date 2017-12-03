// default.js
var gulp = require('gulp');
var runSequence = require('run-sequence');

// Task -- Gulp Default
gulp.task('default', callback => {
  runSequence(
    ['less', 'scripts'],
    'handlebars',
    ['browsersync', 'watch'],
    callback
  )
})
