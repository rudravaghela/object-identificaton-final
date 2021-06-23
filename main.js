img = "";
status = "";
objects = [];

function setup(){
canvas = createCanvas(600,500);
canvas.center();
objectdetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML = "status: dectecting objects";
}

function draw(){
image(img,0,0,600,500);
if (status != ""){
    for(i = 0;i<objects.length;i++){
    document.getElementById("status").innerHTML = "status-object-dectected";
    fill("#ff0000");
    percentage = floor(objects[i].confidence*100);
    text(objects[i].label+" "+ percentage + "%" , objects[i].x +20, objects[i].y + 20);
    noFill();
    stroke("#ff0000");
    rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
    }
}

}

function preload(){
img = loadImage("dog_cat.jpg");

}

function modelLoaded()
{
    console.log("model Loaded!");
    status = true;
    objectdetector.detect(img,gotResult);
}

function gotResult(error,results){
    
    if (error){
        console.error(error);
    }
    objects = results;

    console.log(results);

}
