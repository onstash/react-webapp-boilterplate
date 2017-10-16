import React, { Component } from 'react';

import { cube } from './math.js';

export default class HelloWorld extends Component {
  render() {
    console.log('Hello', cube(3));
    console.log('World', cube(4));
    return (
      <div>
        Hello World from react
      </div>
    );
  }
}
