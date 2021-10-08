import {Component} from '@tylerlong/use-proxy/build/react';
import ReactDOM from 'react-dom';
import React from 'react';

import {Store} from './models';
import store from './store';

class App extends Component<{store: Store}> {
  render() {
    const {store} = this.props;
    return (
      <>
        <svg width="100%" height={store.circleSize * 2}>
          <circle
            cx={store.circleSize}
            cy={store.circleSize}
            r={store.circleSize}
            fill="transparent"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <button onClick={() => store.change()}>Click me</button>
      </>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App store={store} />, container);
