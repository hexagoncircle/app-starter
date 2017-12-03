// plumber.js
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

// Add to module exports
module.exports = customPlumber

function customPlumber(errTitle) {
  // Plumber prevents pipe breaking caused by errors from gulp plugins
  // This custom function uses notifications if available
  return plumber({
    errorHandler: notify.onError({
      // Set errorHandler title based on task
      title: errTitle || 'Error running Gulp',
      message: 'Error: <%= error.message %>',
      sound: 'Hero' || true
    })
  })
}
