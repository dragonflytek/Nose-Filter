noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/yN4SXffV/Clown-Nose-Download-Transparent-PNG-Image.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500, 300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initiated');
}

function draw() {
    image(video, 0, 0, 300, 300);
   image(clown_nose, noseX, noseY, 30, 30); 
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}