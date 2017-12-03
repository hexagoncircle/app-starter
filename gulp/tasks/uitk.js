// uitk.js
const gulp = require('gulp')
const plumber = require('../custom-modules/plumber')
const config = require('../config')

// Task -- Update Core UITK Assets
gulp.task('uitk', () => {
  /*
    Ensure the uitoolkit and uitoolkit-doc-site directories
    share the same root folder as the prototype directory
    or this will not migrate over any files
  */
  gulp.src(config.uitk.lessSrc)
    .pipe(plumber('Error Fetching UITK Less'))
    .pipe(gulp.dest(config.uitk.lessDest))

  gulp.src(config.uitk.cssSrc)
    .pipe(plumber('Error Fetching UITK CSS'))
    .pipe(gulp.dest(config.uitk.cssDest))

  gulp.src(config.uitk.fontSrc)
    .pipe(plumber('Error Fetching UITK Fonts'))
    .pipe(gulp.dest(config.uitk.fontDest))

  gulp.src(config.uitk.jsSrc)
    .pipe(plumber('Error Fetching UITK Templates'))
    .pipe(gulp.dest(config.uitk.jsDest))

  gulp.src(config.uitk.imgSrc)
    .pipe(plumber('Error Fetching UITK Image Assets'))
    .pipe(gulp.dest(config.uitk.imgDest))
})
