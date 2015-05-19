define(function(require, exports, module) {
  "use strict";
  var React = require('react');

  var List = React.createClass({
    getDefaultProps: function() {
      return {
        items: [ ]
      };
    },
    render: function() {
      return (
          <ul>
            { 
              this.props.items.map(function(item){
                var link = "#" + item.name;
                return <li key={item.name}><a href={link}>{item.name}</a></li>
              })
            }
          </ul>
      );
    }
  });

  module.exports = List;

});
