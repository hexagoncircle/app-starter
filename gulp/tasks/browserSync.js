// browserSync.js
const gulp = require('gulp')
const browserSync = require('browser-sync')
const config = require('../config')

// Task -- Browser Sync
gulp.task('browsersync', () => {
  // See available options: https://www.browsersync.io/docs/options
  // Set options inside gulp config.js file
  browserSync(config.browserSync)
});
