
//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  baseUrl: 'http://localhost:5000',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};