import React, { Component } from 'react';
import { render } from 'react-dom';

import Random from '../src/index';

class DemoApp extends Component {
  render () {
    return (
      <div>
        <Random value='name.firstName' locale='en_GB' />
        <Random value='image.image' tag='img' />
      </div>
    );
  }
};

render(
  <DemoApp />,
  document.getElementById('app')
);
