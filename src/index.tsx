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
        <svg width="100%" height={400} key={circle.key}>
          <circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="red"
            stroke="black"
            strokeWidth="1"
          >
            <animateMotion
              dur="100ms"
              path={`M ${circle.animation.startX} ${circle.animation.startY} L ${circle.animation.endX} ${circle.animation.endY}`}
            />
          </circle>
        </svg>
      </>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App store={store} />, container);
