class Background {
  constructor(x = 0, y = 0) {
    this.position = { x: x, y: y };
    this.size = { width: canvas.width, height: canvas.height };
    this.velocity = { dx: -1, dy: 0 };
    this.bg = new Image();
    this.bg.src = "../images/bg.png";
  }

  backgroundSound() {
    const music = new Audio();
    music.src = "./sounds/background.mp3";
    music.play();
    // music.loop = true;
    music.volume = 0.1;
  }

  draw() {
    c.drawImage(
      this.bg,
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
