import {Component} from '@tylerlong/use-proxy/build/react';
import ReactDOM from 'react-dom';
import React from 'react';

class App extends Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
