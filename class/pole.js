class Pole {
  constructor() {
    this.position = { x: canvas.width, y: Math.random() * (0 - -250) + -250 };
    this.size = { height: 300, width: 50 };
    this.velocity = { dx: -1.5, dy: 0 };
    this.upPole = new Image();
    this.downPole = new Image();
    this.upPole.src = "../images/pipe-up.png";
    this.downPole.src = "../images/pipe-down.png";
  }

  drawPole1() {
    c.drawImage(
      this.upPole,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  drawPole2() {
    c.drawImage(
      this.downPole,
      this.position.x,
      this.position.y + this.size.height + 150,
      this.size.width,
      this.size.height
    );
    c.fill();
    // console.log("pole2");
  }

  move() {
    if (this.position.x + this.size.width <= 0) {
      this.position.x = canvas.width;
      this.position.y = Math.random() * (0 - -250) + -250;
    }
    this.position.x += this.velocity.dx;
    // console.log("pole");
  }

  collisions() {
    // upper pole collision
    if (
      this.position.x <= bird.position.x + bird.size.width &&
      bird.position.x <= this.position.x + this.size.width &&
      this.position.y <= bird.position.y + bird.size.height &&
      bird.position.y < this.position.y + this.size.height
    ) {
      this.velocity.dx = 0;
      bird.isDead = true;
    }

    // down pole collision
    if (
      this.position.x <= bird.position.x + bird.size.width &&
      bird.position.x <= this.position.x + this.size.width &&
      this.position.y + this.size.height + 150 <=
        bird.position.y + bird.size.height &&
      bird.position.y <=
        this.position.y + this.size.height + this.size.height + 150
    ) {
      //   console.log("collision");
      this.velocity.dx = 0;
      bird.isDead = true;
    }
  }

  update() {
    this.drawPole1();
    this.drawPole2();
    if (!bird.isDead) {
      this.move();
      this.collisions();
    }
  }
}
