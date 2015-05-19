define(function(require, exports, module) {
  "use strict";
  var React = require('react');

  var List = React.createClass({
    getDefaultProps: function() {
      return {
        items: [ ],
        handlers: null
      };
    },
    render: function() {
      var me = this;
      return (
          <ul>
            { 
              this.props.items.map(function(item){
                var link = "#" + item.name;
                var handlers = me.props.handlers;
                var handler = handlers[item.name] || function() {} 
                return <li key={item.name}><a href={link} onClick={handler.bind(me)}>{item.name}</a></li>
              })
            }
          </ul>
      );
    }
  });

  module.exports = List;

});
