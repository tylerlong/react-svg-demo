import {Component} from '@tylerlong/use-proxy/build/react';
import ReactDOM from 'react-dom';
import React from 'react';

import {Store} from './models';
import store from './store';

class App extends Component<{store: Store}> {
  render() {
    const {store} = this.props;
    const {circle} = store;
    return (
      <>
        <svg width="100%" height={400}>
          <circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="transparent"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <button onClick={() => circle.move(-10, 0)}>left</button>
        <button onClick={() => circle.move(0, -10)}>up</button>
        <button onClick={() => circle.move(10, 0)}>right</button>
        <button onClick={() => circle.move(0, 10)}>down</button>
      </>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App store={store} />, container);
