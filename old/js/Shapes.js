//Taylor Premo -life 2.0
//Menu.js

/**	Block Object
*	Super of all things contained in Map
*	May put misc blocks in here as well (water ect..)
**/	
Point = function(x, y){
	this.x = x;
	this.y = y;
}

Size = function(width, height){
	this.width = width;
	this.height = height;
}

Body = function (location, color){//location is of type Point
	//var bodySize = canvas.height / 10;
	this.rect = {x: location.x*bodySize, y: location.y*bodySize, width: bodySize, height: bodySize};
	this.color = color;

	this.draw = function(){
		context.fillStyle = this.color;
		context.fillRect(this.rect.x * bodySize, this.rect.x * bodySize, this.rect.width * bodySize, this.rect.height * bodySize);
	}

}

Circle = function(location, color){
	this.circle = {x: location.x*bodySize + bodySize/2, y: location.y*bodySize + bodySize/2, radius: bodySize/3};
	this.color = color;

}

Face = function (location, direction){
	var line = {
		points: getFacePoints(location, direction),
		stroke: 'red',
		strokeWidth: faceWidth,//global
		lineCap: 'round',
		lineJoin: 'round'
	};

}

function getFacePoints(location, direction){
	var facePoints;

	switch(direction){
		case 'up':
			facePoints = [x,y,x+1,y];
			break;
		case 'down':
			facePoints = [x,y+1,x+1,y+1];
			break;
		case 'left':
			facePoints = [x,y,x,y+1];
			break;
		case 'right':
			facePoints = [x+1,y,x+1,y+1];
			break;
	}

	facePoints *= bodySize;

}
//var block = new Empty();