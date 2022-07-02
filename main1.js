img ="";
status1 ="";
objectDetector="";
objects=[];
function preload() {
  
  
    img = loadImage('IMG_0521.jpg');
  }



function setup() { 
    canvas = createCanvas(640, 420); 
    canvas.center(); 
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); document.getElementById("status").innerHTML = "Status : Detecting Objects"; }

function modelLoaded() {
    
    console.log (' modelLoaded ');
    status1 = true;
    objectDetector.detect(img, gotResult);

}
function gotResult(error,results)
{
    if (error)
    {
        console.log (error);
    }
    console.log (results);
}
function draw () {
     
    image(img, 0, 0, 600, 420);
   fill('black');
   text('Fruit',100,10);
   noFill();
   stroke("red");
   rect( 100,0,400, 420);
}


