/*eslint-disable */
var gulp = require('gulp');
var jscs = require('gulp-jscs');
var plumber = require('gulp-plumber');

gulp.task('jscs', function() {
  return gulp.src(['lib/**/*.js'])
    .pipe(plumber())
    .pipe(jscs());
});
