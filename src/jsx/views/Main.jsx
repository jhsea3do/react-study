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
    em.emit('load');
  });

  em.on('test2', function() {
    console.log('in action: test2');
    em.emit('load');
  });

  em.on('load', function() {
    console.log('in action: load');

    /*
    this.setState({
        items: [
          {"name": "testA"},
          {"name": "testB"}
        ]
    });
    */
  });

  var Main  = React.createClass({ 
    mixins: [ View ],
    componentDidUpdate: function() {
      console.log( 'view %s update done!'.replace('%s', this.props.title) );
    },
    componentDidMount: function() {
      this.setState({
        items: [
          {"name": "test1"},
          {"name": "test2"}
        ]
      });
      
    },
    getInitialState: function() {
      return {
        items: [ ]
      };
    },
    getDefaultProps: function() {
      var handlers = ['test1', 'test2']
      return {
        "title": "main-page",
        "handlers": _.transform(handlers, function(result, key) {
          result[key] = function(e) {
            em.emit(key, this, e);
          }
        })
      };
    },
    render: function() {
      return (
        <div className={this.props.title}>
          <h2>Main Page</h2>
          <List ref="list1" handlers={this.props.handlers} items={this.state.items} />
          <List ref="list2" handlers={this.props.handlers} items={this.state.items} />
        </div>
      );
    }
  });

  module.exports = Main;

});
