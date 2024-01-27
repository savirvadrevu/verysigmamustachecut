nose_x=0
nose_y=0
function preload()
{
    fancy=loadImage("sus.png")    
    
}
function setup()
{
    canvas= createCanvas(500,400)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses)


}

function gotPoses(results)
{
    if(results.length > 0 )
    {
    console.log(results)
    nose_x=results[0].pose.nose.x+88
    nose_y=results[0].pose.nose.y+50
    console.log(nose_x)
    console.log(nose_y)
    }
}
function taekSnapshot()
{
    save("buggysewelfie.png")
}


function draw()
{
    image(video,0,0,500,400);
    image(fancy,nose_x,nose_y,55,50)
}

function modelLoaded()
{
    console.log('PoseNet is  Werkin :D')
}

