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

      'module/todo/**/*.js',


      'test/unit-test/dashboard.controller.test.js',
      'test/unit-test/dashboard.directive.test.js',
        'test/unit-test/comman.controller.test.js'

    ],

   preprocessors: {
      "module/todo/**/*.js": ['coverage'],
      "partials/*.html": ['html2js']
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    reporters : ['dots', 'junit', 'html','coverage'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-htmlfile-reporter',
      'karma-coverage',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter : {
      outputFile: 'reports/test_out/unit.xml',
      suite: 'unit'
    },

    htmlReporter: {
      outputFile: 'reports/test_out/units.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description'
    },

    check: {
      global: {
        statements: 90,
        branches: 90,
        functions: 100,
        lines: 90
      },
      each: {
        statements: 90,
        branches: 90,
        functions: 100,
        lines: 90
      }
    },

    coverageReporter:{
      type : 'lcov',
      dir : 'reports/coverage/',
      file : 'index.html'
    },

    // add the plugin settings
    ngHtml2JsPreprocessor: {
      stripPrefix: ''
    }
  });
};
