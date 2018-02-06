import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Block from '../src';

class Simple extends Component {
  render() {
    return (
      <div>
        <Block
          layout="vertical"
          vertical="between"
          horizontal="center"
          style={{ width: 300, height: 300, margin: 50, borderWidth: 1, borderStyle: 'solid' }}
        >
          <div style={{ width: 100, height: 100, background: '#f1f1f1' }}>123</div>
          <div style={{ width: 100, height: 100, background: '#f1f1f1' }}>123</div>
        </Block>
      </div>
    );
  }
}
ReactDOM.render(<Simple />, document.getElementById('__react-content'));
