function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(500,500);
    x=ml5.poseNet(video,modelloded);
    x.on('pose',gotposes);
}
nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
diffrence=0;
function modelloded(){
    console.log('model me I am loded');
}
function gotposes(result){
    if(result.length>0){
        console.log(result);
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
        console.log("Nose X is",nosex+"Nose Y is",nosey);
        leftwristx=result[0].pose.leftWrist.x;
        rightwristx=result[0].pose.rightWrist.x;
        diffrence=Math.floor(leftwristx-rightwristx);
        console.log(diffrence);
        console.log("Left Wrist X is",leftwristx+"Right Wrist X is",rightwristx);
    }
}
function draw(){
    background("grey");
    document.getElementById("p").innerHTML="Width and the height of the square will be : "+diffrence+"px";
    fill("#FF10F0")
    stroke("magenta")
    square(nosex,nosey,diffrence);
}