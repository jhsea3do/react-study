define(function(require, exports, module) {
  "use strict";
  var React = require('react');

  var View  = {
    getDefaultProps: function() {
      return {
      };
    },
    componentDidMount: function() {
      this.props.title = this.props.title || 'view-page';
      console.log( 'view %s mount done!'.replace('%s', this.props.title) );
    }
  };

  module.exports = View;

});
