img ="";
status1 ="";
objectDetector="";
objects=[];
function preload() {
  
  
    img = loadImage('IMG_0522.jpg');
  }




function setup() { 
    canvas = createCanvas(640, 420); 
    canvas.center(); 
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    
     }

function modelLoaded() {
    
    console.log ("modelLoaded ");
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
    objects=results; 
}
function draw ()
{
     
    image(img, 0, 0, 640, 420);
    if (status1 !="")
 {    
    
for(i=0; i < objects.length; i++)
    {
        
        document.getElementById("status").innerHTML = "Status :  Object Detected";
        fill("black");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x + 15,objects[i].y + 15);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        
    }


 }
}
