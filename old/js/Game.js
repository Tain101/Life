//Taylor Premo -life 2.0
//Game.js

/**	Updates Game loop
*	Manages Menu
*	Contains Map Object, and updates
*	
*	
**/	

// Global vars
fps = null; //FPSMeter object
canvas = null; //canvas object
context = null; //context object
gameBoard = null;

// ----------------------------------------

// Our 'game' variables
var defaultRestart = false;
var gameSpeed = 5; //frames per sec.
var mapWidth = 10; //number of squares, not pixels
var mapHeight = 20;

var bodyWidth;// = mapWidth / canvas.width;
var bodyHeight;// = mapHeight / canvas.height;

var bodySize; //size of a square, should be calculated, not static
if(bodyHeight < bodyWidth){
	bodySize = bodyHeight;
}



var boardSize = {width:mapWidth, height:mapHeight};

var sideBarWidth = 200;

var blockTypes = 11;

//initial counts
var foodCount = 10;
var treeCount = 0;
var treeQuantity = 25;
var treeRemoveQuantity = 3;
var treeDead = false;
var treeRegrowRate = 1;
var treeDeadRegrowModifier = 2; 
var foodDumbCount = 4; 
var foodSmartCount = 4; 

var lavaCount = 10;
var waterRate = 0.00;
var waterLakeRate = 0.9;

var waterMaxPollutionLevel = 50;
var waterPollutionLevelAnimals = 1;
var waterPollutionLevelBabies = 5;
var waterPollutionLevelReduce = -1;
var waterPollutionNoReproductionLevel = 10;
var waterPollutionToxicLevel = 25;
var waterSpreadLevel = waterPollutionToxicLevel;
var waterSpreadRate = 1;

var population = 10;//fun stuff to change
var currentPopulation = population;
var minPopulation = population * .1;
var maxPopulation = population * 5;
var populationControl = true;

var age = 100;
var minAge = 20;
var maxAge = 100;
var totalHunger = 100;
var hungerReduce = 50;
var mutationRate = 0.05;

var dnaLength = age*blockTypes*blockTypes*totalHunger;

var fruitColor = 'pink';
var treeStartingQuantity = 10;
var faceWidth = 1;

function GameTick(elapsed){
	//fps.update(elapsed)
	
	//----logic
	gameBoard.update();
	//-----render

	console.log("77");

	//clear screen

	context.fillStyle = "purple";
	context.fillRect(0, 0, canvas.width, canvas.height);

	//render objects
	
	gameBoard.draw();
	gameBoard.drawGrid();
	//context.fillStyle = "red";
	//context.fillRect(0, 0, canvas.width, canvas.height);
}

window.onload = function(){
	canvas = document.getElementById("screen");
	context = canvas.getContext("2d");
	bodyWidth = canvas.width / mapWidth;
	bodyHeight = canvas.height / mapHeight;
	
	bodySize = bodyWidth;
	if(bodyHeight < bodyWidth){
		bodySize = bodyHeight;
	}

	console.log("95");
	newGame();
	console.log("99");
	
	GameLoopManager.run(GameTick);	
}

function newGame(){
	console.log("102");

	gameBoard = new Board(boardSize);
	gameBoard.currentMap[0][0] = new Water(new Point(0, 0));
	console.log("105");
	generateAll();
	console.log("106");

}

function generateAll(){
	console.log("112");
	generateWater();
	console.log("114");
	generateFood();
	console.log("116");
	generateTreeFood();
	generateLava();
	generatePopulation();
}

function generateWater(){
	for(var i = 0; i < waterRate; i++){
		var newLake;
		(Math.floor(Math.random()/waterLakeRate == 0)) ? newLake = true : newLake = false;
		var location = gameBoard.getEmpty();

		if(newLake){
			while(!checkAdjacent(location, 'water')){
				location = gameBoard.getEmpty();
			}
		}
		console.log("water");
		gameBoard.add(new Water(location));
		console.log("128");
	}
}

function generateFood(){
	for(var i = 0; i < foodCount; i++){
		var location = gameBoard.getEmpty();

		console.log("143")
		gameBoard.add(new Food(location));

	}
}

function generateTreeFood(){
	for(var i = 0; i < treeCount; i++){
		var location = gameBoard.getEmpty();

		gameBoard.add(new Tree(location));
	}
}

function generateLava(){
	for(var i = 0; i < lavaCount; i++){
		var location = gameBoard.getEmpty();

		gameBoard.add(new Lava(location));
	}
}

function generatePopulation(){
	for(var i = 0; i < population; i++){
		var location = gameBoard.getEmpty();

		gameBoard.add(new Animal(location));
	}
}