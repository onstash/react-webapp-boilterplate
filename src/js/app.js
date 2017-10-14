import React, { Component } from 'react';
import { render } from 'react-dom';

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        Hello from react
      </div>
    );
  }
}

render(<HelloWorld />, document.getElementById('app'));
