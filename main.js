function preload() {
buggy = loadImage("https://i.postimg.cc/rp7NjnhM/m.png");
}

function setup() {
    canvas = createCanvas(500, 500);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

function modelLoaded() {
    console.log('PoseNet foi inicializado');
  }
  
function tirar_OBOLODOFORNO() {
save("foto_com_bigode.png");

}

noseX=0;
noseY=0;

function gotPoses(results)
{

if(results.length > 0)
{
console.log("nariz x = " + results[0].pose.nose.x);
console.log("nariz y = " + results[0].pose.nose.y);
console.log(results);
noseX= results[0].pose.nose.x - 50;
noseY= results[0].pose.nose.y + 0;
}

}

function draw() {
  image(video, 0, 0, 500, 500);
  image(buggy, noseX, noseY, 100, 50);
}