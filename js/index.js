

const myCanvas = document.getElementById("canvas");
const ctx = myCanvas.getContext("2d");
myCanvas.style.border = "2px solid black";
const height = myCanvas.height 
const width = myCanvas.width
const bgImg = new Image()
bgImg.src = "images/road.png";

let carX =100;
let carY =260 ;
let animateId ;
let gameOver = false ;

const car = new Image()
car.src = "images/car.png";

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
 
  };
  const animate= () => {
    if (gameOver == true){cancelAnimationFrame(animateId);}
    else {
animateId= requestAnimationFrame(animate);
 }

 ctx.drawImage(bgImg, 0, 0, myCanvas.width, myCanvas.height);
 ctx.drawImage(car, carX,carY, 90, 120)

document.addEventListener('keydown', event => {
 
  if (event.key === 'ArrowLeft') {
    // move paddle to the left
    isMovingLeft = true ;
    for (carX > 0){
      carX -= 2;}
  }
  if (event.key === 'ArrowRight') {
    // move paddle to the right
    isMovingRight = true;
    
    for (carX < width){
    carX += 2;
  }}

})


  }

  function startGame() {animate();}
};
