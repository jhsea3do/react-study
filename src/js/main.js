requirejs.config({
  baseUrl: '../../src',
  paths: {
    'jquery'        : '../../bower_components/jquery/dist/jquery.min',
    'lodash'        : '../../bower_components/lodash/lodash.min',
    'react'         : '../../bower_components/react/react-with-addons',
    'JSXTransformer': '../../bower_components/react/JSXTransformer',
    'jsx'           : '../../bower_components/requirejs-react-jsx/jsx',
    'text'          : '../../bower_components/requirejs-text/text',
    'views'         : '../../src/jsx/views',
    'components'    : '../../src/jsx/components',
    'mixins'        : '../../src/jsx/mixins',
    'App'           : '../../src/jsx/App'
  },
  shim: {
    "jquery": {
      "exports": "$"
    },
    "lodash": {
      "exports": "_"
    },
    "react": {
      "exports": "React"
    },
    "JSXTransformer": "JSXTransformer"
  },
  jsx: {
    fileExtension: ".jsx",
    usePragma: false
  }
});


define(function(require, exports, module) {
  var React = require('react');
  var App = require('jsx!App');
  new App().start();
});
