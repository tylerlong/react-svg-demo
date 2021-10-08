export class Store {
  circle = new Circle();
}

export class Circle {
  cx = 100;
  cy = 100;
  r = 10;

  move(x: number, y: number) {
    this.cx += x;
    this.cy += y;
  }
}
