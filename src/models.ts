export class Store {
  circleSize = 100;

  change() {
    this.circleSize -= 10;
    if (this.circleSize <= 0) {
      this.circleSize = 100;
    }
  }
}
