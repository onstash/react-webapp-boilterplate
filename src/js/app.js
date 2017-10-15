import React from 'react';
import { render } from 'react-dom';

import HelloWorld from './hello-world';

render(<HelloWorld />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./hello-world', ({ default: HelloWorld }) => {
    console.log('Accpeting the update hello-world Component');
    render(<HelloWorld />, document.getElementById('app'));
  });
}
