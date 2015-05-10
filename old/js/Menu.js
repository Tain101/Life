//Taylor Premo -life 2.0
//Menu.js

/**	Menu Object
*	Generates buttons
*	
**/	
//colors global

Menu = function(buttons, point, size){//contains all the buttons, with a background body
	this.background = new Background(point, size);
	this.text = new Text(point, size, textColor);
	this.buttons = buttons;
}

Button = function(title, point, size, onClickFunc){
	this.title = title;
	this.onClickFunc = onClickFunc;
	this.background = new Background(point, size, buttonColor);
	this.text = new Text(point, size, textColor);
}

//example
/*
var point = new Point(boardSize.width + spacer, spacer);
function f(){
	newGame();
}
var newMapNoSaveButton = Button("New Map With Random Animals", point, buttonSize, f);
point = Point(boardSize.width + spacer, spacer + buttonSize.height + spacer);
function f(){
	quitGame();
}

var quitButton = Button("Quit", point, buttonSize, f);

var buttonArr = [newMapNoSaveButton, quitButton];
var menu = Menu(buttonArr, menuPoint, menuSize);
*/