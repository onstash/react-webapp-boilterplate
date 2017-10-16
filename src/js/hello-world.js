import React, { Component } from 'react';

import { cube } from './math.js';

export default class HelloWorld extends Component {
  render() {
    console.log('Hello', cube(3));
    return (
      <div>
        Hello from react
      </div>
    );
  }
}
