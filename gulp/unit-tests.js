'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var karma = require('karma');
var testBrowserSync = require('browser-sync').create('test-server');

function runTests (singleRun, done) {
  karma.server.start({
    configFile: path.join(__dirname, '/../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun
  }, function() {
    done();
  });
}

function startServer() {
    testBrowserSync.init({
    startPath: '/unit-test',
    server: {
      baseDir: ['./karma_html'],
    },
    port: 4000
  });
}

gulp.task('test', ['scripts'], function(done) {
  runTests(true, done);
});

gulp.task('test:auto', ['watch'], function(done) {
 startServer();
 runTests(false, done);
});
