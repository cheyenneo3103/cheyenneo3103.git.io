var R = Math.floor(Math.random() * Math.floor(100))
var c = document.getElementById("myCanvas");
var r = Math.floor(Math.random() * Math.floor(70))
var O = Math.floor(Math.random() * Math.floor(100))
var ctx = c.getContext("2d");


function doDrawing() {
    t = 0;
            
    ctx.clear();
            
    var timesRun = 0;
    var color =  '#'+Math.floor(Math.random()*16777215).toString(16);


    var xCenter = c.width/2;
    var yCenter = c.height/2;
    let x = xCenter + Math.floor((R+r)*Math.cos(t) - (r+O)*Math.cos(((R+r)/r)*t));
    let y = yCenter + Math.floor((R+r)*Math.sin(t) - (r+O)*Math.sin(((R+r)/r)*t));
                
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x,y);

    var interval = setInterval(function() {
    timesRun += 1;
    if(timesRun === 1080) {
        clearInterval(interval); 
    }
                
    drawCircle();
    }, 20); 
            
}
        
function drawCircle() { 
    t += 0.1;
        
    var xCenter = c.width/2;
    var yCenter = c.height/2;
    let x = xCenter + Math.floor((R+r)*Math.cos(t) - (r+O)*Math.cos(((R+r)/r)*t));
    let y = yCenter + Math.floor((R+r)*Math.sin(t) - (r+O)*Math.sin(((R+r)/r)*t));
            
    ctx.lineTo(x,y);  
    ctx.stroke();
    }

    CanvasRenderingContext2D.prototype.clear = 
    CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
        if (preserveTransform) {
            this.save();
            this.setTransform(1, 0, 0, 1, 0, 0);
            }

            this.clearRect(0, 0, this.canvas.width, this.canvas.height);

            if (preserveTransform) {
            this.restore();
            }           
        };