'use strict';
var jshintHtmlReporter = require('jshint-html-reporter');
var coverageReport=require('karma-coverage');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                reporter: jshintHtmlReporter,
                reporterOutput: 'reports/jshint-report/jshint-report.html',
                jshintrc: '.jshintrc'
            },
            all: ['app/module/todo/**/*.js', 'test/*.js']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default',['jshint']);
    grunt.registerTask('jshint-report',['jshint']);


};