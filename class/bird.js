class Bird {
  constructor() {
    this.position = { x: 0, y: 0 };
    this.size = { height: 50, width: 50 };
    this.velocity = { dx: 0, dy: 0 };
  }

  draw() {
    c.beginPath();
    c.fillStyle = "red";
    c.rect(this.position.x, this.position.y, this.size.height, this.size.width);
    c.fill();
  }
}
