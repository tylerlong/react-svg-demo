import {useProxy} from '@tylerlong/use-proxy';

import {Store} from './models';

const store = useProxy(new Store());

export default store;

const {circle} = store;

document.addEventListener('keydown', e => {
  console.log('keydown');
  const speed = 5;
  switch (e.key) {
    case 'ArrowLeft': {
      circle.move(-speed, 0);
      break;
    }
    case 'ArrowUp': {
      circle.move(0, -speed);
      break;
    }
    case 'ArrowRight': {
      circle.move(speed, 0);
      break;
    }
    case 'ArrowDown': {
      circle.move(0, speed);
      break;
    }
    default: {
      break;
    }
  }
});
