import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Block from '../src';

class Simple extends Component {
  render() {
    return (
      <div>
        <Block el="div" style={{ width: 100, height: 100, margin: 50 }}>3333</Block>
      </div>
    );
  }
}
ReactDOM.render(<Simple />, document.getElementById('__react-content'));
