window.requestAnimationFrame = window.requestAnimationFrame ||
                               window.mozRequestAnimationFrame ||
                               window.webkitRequestAnimationFrame ||             
                               window.msRequestAnimationFrame;

var ctx1 = document.getElementById("canvas1").getContext('2d');
var ctx2 = document.getElementById("canvas2").getContext('2d');
var ctx3 = document.getElementById("canvas3").getContext('2d');
var ctx4 = document.getElementById("canvas4").getContext('2d');
var ctx5 = document.getElementById("canvas5").getContext('2d');

var img1Deg = 0;
var img1Speed = 0;
var img1 = new Image();
img1.src = 'spinner.png'

var img2Deg = 0;
var img2Speed = 0;
var img2 = new Image();
img2.src = 'Executive Spinner.png'

var img3Deg = 0;
var img3Speed = 0;
var img3 = new Image();
img3.src = 'Horus Spinner.png'

var img4Deg = 0;
var img4Speed = 0;
var img4 = new Image();
img4.src = 'MecArmy Spinner.png'

var img5Deg = 0;
var img5Speed = 0;
var img5 = new Image();
img5.src = 'Secret Service Spinner.png'

var friction = 0.998;
var frictionSpeed = 0;

function loop() {
    ctx1.clearRect(0,0,350,350);
    ctx2.clearRect(0,0,350,350);
   	ctx3.clearRect(0,0,350,350);
    ctx4.clearRect(0,0,350,350);
    ctx5.clearRect(0,0,350,350);


    drawRotatedImage(img1,175,150,img1Deg, 288, 279, ctx1);
    drawRotatedImage(img2,175,150,img2Deg, 249, 246, ctx2);
    drawRotatedImage(img3,175,150,img3Deg, 259, 265, ctx3);
    drawRotatedImage(img4,175,150,img4Deg, 259, 253, ctx4);
    drawRotatedImage(img5,175,150,img5Deg, 255, 252, ctx5);




    img1Speed *= friction
   	img1Deg+=img1Speed

   	img2Speed *=friction
   	img2Deg+=img2Speed

   	img3Speed *=friction
   	img3Deg+=img3Speed

   	img4Speed *=friction
   	img4Deg+=img4Speed

   	img5Speed *=friction
   	img5Deg+=img5Speed


   	requestAnimationFrame(loop);
} 
loop();

function drawRotatedImage(image, x, y, angle, sizex, sizey, ctx) {
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(angle*Math.PI/180);
	ctx.drawImage(image, -(sizex/2), -(sizey/2));
	ctx.restore();
}
function flick1() {img1Speed+= 7;}
function left1() {img1Speed+= -2;}
function right1() {img1Speed+= 2;}

function flick2() {img2Speed+= 7;}
function left2() {img2Speed+= -2;}
function right2() {img2Speed+= 2;}

function flick3() {img3Speed+= 7;}
function left3() {img3Speed+= -2;}
function right3() {img3Speed+= 2;}

function flick4() {img4Speed+= 7;}
function left4() {img4Speed+= -2;}
function right4() {img4Speed+= 2;}

function flick5() {img5Speed+= 7;}
function left5() {img5Speed+= -2;}
function right5() {img5Speed+= 2;}