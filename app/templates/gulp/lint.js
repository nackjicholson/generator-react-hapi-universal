/*eslint-disable */
'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src(['lib/**/*.js', 'js/**/*.js'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('lint-dev', function() {
  gulp.watch(['lib/**/*.js'], ['lint']);
});
