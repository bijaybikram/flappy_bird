class Bird {
  constructor() {
    this.position = { x: canvas.width / 3, y: canvas.height / 2.5 };
    this.size = { height: 50, width: 50 };
    this.velocity = { dx: 0, dy: 2 };
    this.gravity = 0.1;
    this.isDead = false;
    this.bird1 = new Image();
    this.bird2 = new Image();
    this.bird3 = new Image();
    this.bird4 = new Image();
    this.bird1.src = "../images/frame-1.png";
    this.bird2.src = "../images/frame-2.png";
    this.bird3.src = "../images/frame-3.png";
    this.bird4.src = "../images/frame-4.png";

    // bird frames loop
    this.frames = [this.bird1, this.bird2, this.bird3, this.bird4]; // Replace with your image assets
    this.currentFrame = 0;
    this.frameChangeInterval = 50; // Milliseconds between frame changes
    this.lastFrameChangeTime = 0;

    //
    setInterval(() => {
      this.frameUpdate();
    }, this.frameChangeInterval);
  }

  frameUpdate() {
    const currentTime = Date.now();
    if (currentTime - this.lastFrameChangeTime >= this.frameChangeInterval) {
      this.currentFrame = (this.currentFrame + 1) % this.frames.length; // Loop back to the first frame
      this.lastFrameChangeTime = currentTime;
    }
  }

  draw() {
    // const currentFrameImage = this.frames[this.currentFrame];
    c.drawImage(
      this.frames[this.currentFrame],
      this.position.x,
      this.position.y,
      this.size.height,
      this.size.width
    );
  }

  move() {
    this.velocity.dy += this.gravity;
    this.position.y += this.velocity.dy;
  }

  collision() {
    if (this.position.y + this.size.height >= canvas.height) {
      this.position.y = canvas.height - this.size.height;
      // console.log("collided");
      this.isDead = true;
    }
  }

  jump() {
    this.velocity.dy = -2;
  }

  update() {
    this.draw();

    if (!this.isDead == true) {
      this.move();
      this.frameUpdate();
      this.collision();
    }
  }
}
