define(function(require, exports, module) {
  "use strict";
   var $     = require('jquery');
   var _     = require('lodash');
   var React = require('react');
   var Main  = require('jsx!views/Main');
   var App   = function(config) { this.config = config || {}; }
   _.extend(App.prototype, {
     'start': function() {
        console.log('start... ');
        this.run();
      },
      'run': function() {
        React.render(<Main name="test" />, $('#main')[0] );
        console.log(['running...', this.config]);
      }
   })
   module.exports = App
});
