var canvas;
var music;
var rectangle1,rectangle2,rectangle3,rectangle4;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    rectangle1 = createSprite(0,580,360,30);
    rectangle1.shapeColor = rgb(0,0,255);

    rectangle2 = createSprite(295,580,200,30);
    rectangle2.shapeColor = rgb(255,128,0);

    rectangle3 = createSprite(515,580,200,30);
    rectangle3.shapeColor = rgb(153,0,76);

    rectangle4 = createSprite(740,580,220,30);
   rectangle4.shapeColor = rgb(0,100,0);

    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = rgb(255,255,255);
    box.velocityY = 9;
    box.velocityX = 4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
if(rectangle1.isTouching(box)&&
    box.bounceOff(rectangle1)){
box.shapeColor = rgb(0,0,255);
music.play();
    }

if(rectangle2.isTouching(box)){
    box.shapeColor = rgb(255,128,0);
    box.velocityX =0;
    box.velocityY =0;
    music.stop();
}

if(rectangle3.isTouching(box)&&
    box.bounceOff(rectangle3)){
        box.shapeColor= rgb (153,0,76);
    }

    if(rectangle4.isTouching(box)&&
    box.bounceOff(rectangle4)){
        box.shapeColor= rgb (0,100,0);
    }  

    drawSprites();
}