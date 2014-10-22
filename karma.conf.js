// Karma configuration
// Generated on Tue Oct 21 2014 15:04:21 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qunit', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'js/**/*.{js,coffee}', included: false},
      {pattern: 'bower_components/**/*.js', included: false},
      {pattern: 'test/**/*-test.{js,coffee}', included: false},
      {pattern: 'test/main.js', included: false},
      {pattern: 'js/main.js', included: false},
      {pattern: 'requirejs-config.js', included: false},
      'test/main.karma.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: [
      'dots',
      // 'coverage',
      // enable growl support via: karma-growl-reporter --save-dev
      // and uncommenting the line below
      'growl'
    ],

    // preprocessors: {
    //   // source files, that you wanna generate coverage for
    //   // do not include tests or libraries
    //   // (these files will be instrumented by Istanbul)
    //   'js/**/*.{js}': ['coverage']
    // },

    // // optionally, configure the reporter
    // coverageReporter: {
    //   type : 'html',
    //   dir : 'coverage/'
    // },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeCanary'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
