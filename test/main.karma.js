/*
Only file that is included in by karma test runner.

Everything from here on out is a cascading tree of configuration

- baseUrl is set here, and depends on requirejs-config.js
- requirejs-config.js then depends on main, where main refers to the main.js file
  for the current baseUrl (/base/test/main.js) in this case
- /base/test/main.js gathers all the files that end in 'test' or 'spec', then
  those become deps for that file. /base/test/main.js also changes the baseUrl
  to /base/src
- base/src contains a main.js file which has deps again on requirejs-config, which
  then has deps on ['main'] which in this case refers to /base/src/main.js
    - base/src/main.js only then again references requirejs-config.js for
      settings like path, etc. However, this only becomes important perhaps never
      which is why I've removed it for now. If it's needed it should say:

      require.config({
        baseUrl: '/base/src',
        deps: ['/base/requirejs-config.js']
      });

- Note: this whole setup is based on the idea that we're using karma. If we're not
  using karma and would like to require these files without the /base/ prefix, see the
  commented out code within test/main.js which does so (but I haven't played with yet)

Inspired by generator-thorax which uses a similar setup, although for thorax based
javascript apps.

This version is much, much cleaner.

TODO: make a mocha/chai version? Ember uses Qunit so that's why I'm using it here
but it's not hard to retrofit to mocha/chai

 */

require.config({
  baseUrl: '/base/test',
  deps: ['/base/requirejs-config.js']
});
