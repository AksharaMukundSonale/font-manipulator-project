leftWristX = 0;
rightWristX = 0;
difference = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is intialized!');
}

function gotPoses()
{
    if(results.length > 0)
   {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;

    difference = floor(leftWristX - rightWristX);
    
    console.log("rightWristX = " + results[0].pose.rightWrist.x);
    console.log("leftWristX = " + results[0].pose.leftWrist.x);
   } 
}

function draw()
{
    background('#fcb1e1');

    document.getElementById("font_update").innerHTML = "Font size of the text will be = " + difference + "px";
    textSize(10);
    fill("#300820");
    text(Akshara, 50, 400);

    
}