//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-route/angular-route.min.js',
      'bower_components/angular-ui-select/dist/select.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'bower_components/angularjs-datepicker/src/js/angular-datepicker.js',
      'bower_components/Chart.js/Chart.js',
      'bower_components/angular-chart.js/dist/angular-chart.min.js',

      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',


      'module/todo/app.module.js',
      'module/todo/app.config.js',
      'module/todo/dashboard/dashboard.controller.js',
      'module/todo/dashboard/dashboard.directive.js',
      'module/todo/dashboard/dashboard.factory.js',
      'test/dashboard.controller.test.js',
      'test/dashboard.directive.test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-junit-reporter'
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      'app/module/todo/dashboard/*.js': ['coverage']
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage'
    },

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

