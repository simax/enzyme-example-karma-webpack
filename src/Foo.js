import React, { PropTypes } from 'react';

var Foo = React.createClass({
  getInitialState() {
    return {
      test: "initial"
    };
  },
  onClick() {
    this.setState({test: "testClass"});
  },
  render() {
    return (
      <div className={this.state.test}>
        <button onClick={this.onClick}></button>
      </div>
    );
  }
});

export default Foo;
