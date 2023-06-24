function setup()
{
          video = createCapture(VIDEO);
          video.size(550,650);

          canvas = createCanvas(550,550)
          canvas.position(550,150)
          
          poseNet = ml5.poseNet(video , modelloaded());
          posenet.on('poses , gotPoses');
}

function draw()
{
          background('#0B31A5');
}

function modelloaded()
{
          console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
          if(results.lenght > 0);
          console.log(results);
}