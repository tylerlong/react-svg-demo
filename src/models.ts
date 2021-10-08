import waitFor from 'wait-for-async';
import hyperid from 'hyperid';

const uuid = hyperid();

export class Store {
  circle = new Circle();
}

export class Circle {
  cx = 100;
  cy = 100;
  r = 10;
  animation = new Animation();
  key = '';
  moving = false;

  async move(x: number, y: number) {
    if (this.moving) {
      return;
    }
    this.moving = true;
    this.animation.startX = -x;
    this.animation.startY = -y;
    this.animation.endX = 0;
    this.animation.endY = 0;
    this.cx += x;
    this.cy += y;
    this.key = uuid();
    await waitFor({interval: 100});
    this.moving = false;
  }
}

export class Animation {
  startX = 0;
  startY = 0;
  endX = 0;
  endY = 0;
}
