'use strict';
var chalk = require('chalk');
var superb = require('superb');
var _s = require('underscore.string');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.blue('React Hapi Universal') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What would you like to call this project?',
        default: this.appname.replace(/\s/g, '-'),
        filter: function(val) {
          return _s.slugify(val);
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your service',
        default: 'My ' + superb() + ' service.'
      },
      {
        name: 'githubUsername',
        message: 'What is the GitHub username?',
        store: true,
        validate: function(val) {
          return val.length > 0 ? true : 'You have to provide a username';
        }
      }
    ];

    this.prompt(prompts, function (props) {
      props.name = this.user.git.name();
      props.email = this.user.git.email();
      props.camelModuleName = _s.camelize(props.moduleName);
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },
  writing: {
    appFiles: function() {
      this.template('_package.json', 'package.json', this.props);
      this.template('_README.md', 'README.md', this.props);
      this.template('lib/_server.js', 'lib/server.js', this.props, {
        interpolate: /<%=([\s\S]+?)%>/g
      });

      this.copy('server.js', 'server.js');
      this.copy('lib/loadPlugins.js', 'lib/loadPlugins.js');

      this.directory('lib/app', 'lib/app');

      // Using bulkDirectory to skip templating, in order to get around
      // a bug where it tries to template things inside bundle.js
      this.bulkDirectory('lib/public', 'lib/public');
    },
    configFiles: function() {
      this.copy('gitignore', '.gitignore');
      this.copy('jscsrc', '.jscsrc');
      this.copy('eslintrc', '.eslintrc');
      this.copy('travis.yml', '.travis.yml');
      this.copy('webpack.config.js', 'webpack.config.js');
      this.copy('webpack.config.prod.js', 'webpack.config.prod.js');
    },
    gulpFiles: function() {
      this.copy('gulpfile.js', 'gulpfile.js');
      this.directory('gulp', 'gulp');
    }
  },
	install: function() {
		this.installDependencies({bower: false});
	}
});
