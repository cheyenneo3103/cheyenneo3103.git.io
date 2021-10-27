var context;
var x = 0;
var y = 250;
var dx = Math.floor(Math.random() * 9) + 3;
var dy = Math.floor(Math.random() * 9) + 3;
setInterval(draw,30);
var click = 0;

function startBall() {
    context = myCanvas.getContext('2d');   
}

function draw() {
    var color =  '#'+Math.floor(Math.random()*16777215).toString(16);
    context.clearRect(0,0, 500,500);
    context.beginPath();
    context.fillStyle = color;
    if (click > 0) {
        context.arc(x,y,click,0,Math.PI*2,true);
    }
    else {
        context.arc(x,y,30,0,Math.PI*2,true);
    }
    context.fill();

    if (x < 0 || x > 500) {
        dx =- dx;
    }
    if (y < 0 || y > 500) {
        dy =- dy;
    }
    x += dx;
    y += dy;

}

function changeSize() {
    //document.getElementById("myCanvas").style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    click = Math.floor(Math.random() * 40) + 5;
    return click; 
  }
