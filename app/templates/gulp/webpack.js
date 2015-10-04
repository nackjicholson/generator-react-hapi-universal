/*eslint-disable */
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var productionConfig = require('../webpack.config.prod');

gulp.task('webpack:build', function(callback) {
  // run webpack
  webpack(productionConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({ colors: true }));

    callback();
  });
});

// Production build
gulp.task('build', ['webpack:build']);
