require.config({
  deps: ['main'],
  paths: {
    'app': '/base/app',
    'lodash': '/base/bower_components/lodash/dist/lodash',
  },
  shim: {
    'lodash': {
      exports: '_'
    }
  }
});
