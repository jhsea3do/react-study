define(function(require, exports, module) {
  "use strict";
  var React  = require('react');
  var List   = require('jsx!components/List');
  var View   = require('jsx!mixins/View');
  var EventEmitter2 
             = require('eventemitter2'); 

  var em    = new EventEmitter2({});

  em.on('test1', function() {
    console.log('in action: test1');
  });

  em.on('test2', function() {
    console.log('in action: test2');
  });

  var Main  = React.createClass({ 
    mixins: [ View ],
    getDefaultProps: function() {
      return {
        title: "main-page",
           em: em,
        handlers: {
          "test1": function(e) {
            em.emit('test1', this, e)
          },
          "test2": function(e) {
            em.emit('test2', this, e)
          },
        },
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
          <List ref="list1" handlers={this.props.handlers} items={this.props.items} />
          <List ref="list2" handlers={this.props.handlers} items={this.props.items} />
        </div>
      );
    }
  });

  module.exports = Main;

});
