define(function(require, exports, module) {
  "use strict";
  var React = require('react');
  var List  = require('jsx!components/List');
  var View  = require('jsx!mixins/View');
  var Main  = React.createClass({ 
    mixins: [ View ],
    getDefaultProps: function() {
      return {
        title: "main-page",
        items: [ 
          {"name": "test1"},
          {"name": "test2"}
        ]
      };
    },
    render: function() {
      return (
        <div className={this.props.title}>
          <h2>Main Page</h2>
          <List items={this.props.items} />
        </div>
      );
    }
  });

  module.exports = Main;

});
