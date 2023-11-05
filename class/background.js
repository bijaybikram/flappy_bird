class Background {
  constructor(x = 0, y = 0) {
    this.position = { x: x, y: y };
    this.size = { width: canvas.width, height: canvas.height };
    this.velocity = { dx: -1, dy: 0 };
    this.img = new Image();
    this.img.src = "../images/bg.png";
  }

  draw() {
    c.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      canvas.width,
      canvas.height
    );
  }

  move() {
    if (this.position.x + this.size.width <= 0) {
      this.position.x = canvas.width;
    }
    this.position.x += this.velocity.dx;
  }
  update(isDead) {
    this.draw();
    if (!bird.isDead) {
      this.move();
    }
  }
}
