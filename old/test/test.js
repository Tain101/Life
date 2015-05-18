// ----------------------------------------
// Actual game code goes here.

// Global vars
fps = null; //FPSMeter object
canvas = null; //canvas object
context = null; //context object

// ----------------------------------------

// Our 'game' variables
var posX = 0;
var posY = 0;
var velX = 100;
var velY = 100;
var sizeX = 80;
var sizeY = 40;

function GameTick(elapsed)
{
    fps.update(elapsed);

    // --- Logic

    // Movement physics
    posX += velX*elapsed;
    posY += velY*elapsed;
    // Collision detection and response
    if ( (posX <= 0 && velX < 0) || (posX >= canvas.width-sizeX && velX > 0) )
        velX = -velX;
    if ( (posY <= 0 && velY < 0) || (posY >= canvas.height-sizeY && velY > 0) )
        velY = -velY;

    // --- Rendering

    // Clear the screen
    context.fillStyle = "cyan";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // Render objects
    context.strokeRect(posX, posY, sizeX, sizeY);
    context.fillStyle = "red";
    context.fillText("Hello World!", posX+10, posY+25);
}

window.onload = function () {
    canvas = document.getElementById("screen"); //get canvas from index.html
    context = canvas.getContext("2d"); //context to draw on
    fps = new FPSMeter("fpsmeter", document.getElementById("fpscontainer")); //create a new FPSMeter object.
                                                                            //this was imported in index.html
    GameLoopManager.run(GameTick);//Calls GameLoopManager function's function run
};