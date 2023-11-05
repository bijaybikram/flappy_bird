const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let gameScore = 0;

const bird = new Bird();
const pole = new Pole();
const bg1 = new Background();
const bg2 = new Background(bg1.size.width);

// function backgroundSound() {
//   const music = new Audio();
//   music.src = "./sounds/background.mp3";
//   music.play();
//   music.loop = true;
//   music.volume = 0.1;
// }

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  bg1.update();
  bg2.update();
  bird.update();
  pole.update();
  // pole1.collision();

  c.beginPath();
  c.fillStyle = "black";
  c.font = "30px sans serif";
  c.fillText(gameScore, 20, 50);
  if (bird.isDead) {
    clearInterval(intervalId);
    c.beginPath();
    c.fillStyle = "red";
    c.font = "20px sans serif";
    c.fillText(`gameover! Your final score is ${gameScore}`, 20, 100);
  }
  requestAnimationFrame(animate);
}

const intervalId = setInterval(() => {
  gameScore++;
}, 1000);

//flap sound calling
setInterval(() => {
  if (!bird.isDead) {
    bird.flapSound();
  }
}, 250);

// pole1.borderCollisionPole1();
// pole1.borderCollisionPole2();
//   console.log("hello");
document.addEventListener("keydown", () => {
  bird.jump();
});
animate();
