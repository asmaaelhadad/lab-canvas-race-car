const myCanvas = document.getElementById("canvas");
const ctx = myCanvas.getContext("2d");
myCanvas.style.border = "2px solid black";
const height = myCanvas.height;
const width = myCanvas.width;
const bgImg = new Image();
bgImg.src = "images/road.png";

let carX = 100;
let carY = 260;
let animateId;
let gameOver = false;
let isMovingLeft = false;
let isMovingRight = false;

const car = new Image();
car.src = "images/car.png";

const animate = () => {
  ctx.drawImage(bgImg, 0, 0, myCanvas.width, myCanvas.height);
  if (isMovingLeft) {
    carX -= 5
  
  ctx.drawImage(car, carX, carY, 90, 120);
}
  if (isMovingRight) {
    carX -= 5
  
  ctx.drawImage(car, carX, carY, 90, 120);
}
  if (gameOver == true) {
    cancelAnimationFrame(animateId);
  } else {
    animateId = requestAnimationFrame(animate);
  }
};

  function startGame() {
    animate();
  }

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      isMovingLeft = true;
      
    }
    if (event.key === "ArrowRight") {
      isMovingRight = true;

      /* for (carX < width){
    carX ++ ;
  }*/
    }
  });


};
