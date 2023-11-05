const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const bird = new Bird();
const pole1 = new Pole();
const bg1 = new Background();
const bg2 = new Background(bg1.size.width);
function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  bg1.update();
  bg2.update();
  bird.update();
  bird.collision();

  pole1.update();
  // pole1.collision();

  // pole1.borderCollisionPole1();
  // pole1.borderCollisionPole2();
  //   console.log("hello");
  document.addEventListener("keydown", () => {
    bird.jump();
  });
  requestAnimationFrame(animate);
}
animate();
