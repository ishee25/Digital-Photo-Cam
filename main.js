function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(900, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 220, 200);

    fill(0, 0, 0);
    stroke(0, 0, 0);
    circle(50, 50, 80);

    fill(255, 192, 203);
    stroke(255, 192, 203);
    rect(90, 40, 460, 20);

    fill(255, 192, 203);
    ellipse(50, 50, 55, 55);

    //break

    fill(0, 0, 0);
    stroke(0, 0, 0);
    circle(550, 50, 80);

    fill(255, 192, 203);
    ellipse(550, 50, 55, 55);

    //break

    fill(0, 0, 0);
    stroke(0, 0, 0);
    circle(50, 400, 80);

    fill(255, 192, 203);
    stroke(255, 192, 203);
    rect(90, 390, 460, 20);

    fill(255, 192, 203);
    ellipse(50, 400, 55, 55);

    //break

    fill(0, 0, 0);
    stroke(0, 0, 0);
    circle(550, 400, 80);

    fill(255, 192, 203);
    ellipse(550, 400, 55, 55);

    //break

    fill(255, 192, 203);
    stroke(255, 192, 203);
    rect(40, 90, 20, 270);

    //break

    fill(255, 192, 203);
    stroke(255, 192, 203);
    rect(540, 90, 20, 270);
    
}

function take_snapshot(){
    save('myDigitalCamPic.png');
}