'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('generator', function () {
  beforeEach(function (cb) {
    var deps = ['../app'];

    helpers.testDirectory(path.join(__dirname, 'tmp'), function (err) {
      if (err) {
        cb(err);
        return;
      }

      this.generator = helpers.createGenerator('react-hapi-universal', deps, null, {skipInstall: true});
      cb();
    }.bind(this));
  });

  it('generates expected files', function (cb) {
    var expected = [
      '.gitignore',
      '.eslintrc',
      '.travis.yml',
      'server.js',
      'lib/server.js',
      'lib/loadPlugins.js',
      'lib/app/routes.js',
      'lib/app/users.js',
      'lib/app/components/App.js',
      'lib/app/components/UserProfile.js',
      'lib/app/components/UsersIndex.js',
      'lib/public/js/client-app.js',
      'lib/public/js/dist/bundle.js',
      'package.json',
      'README.md',
      'gulpfile.js',
      'gulp/default.js',
      'gulp/jscs.js',
      'gulp/lint.js',
      'gulp/webpack.js'
    ];

    helpers.mockPrompt(this.generator, {
      serviceName: 'test',
      githubUsername: 'test',
      description: 'test'
    });

    this.generator.run(function () {
      assert.file(expected);
      cb();
    });
  });
});
