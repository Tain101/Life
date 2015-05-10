//Taylor Premo -life 2.0
//Menu.js

/**	Block Object
*	Super of all things contained in Map
*	May put misc blocks in here as well (water ect..)
**/	

Block = function (){
    this.type = 'block';
    if(arguments[0]) this.type = arguments[0];

    this.location = {x: 0, y: 0};
    this.update = function(){
		
    }

    this.draw = function(){
    	if(this.body){
    		this.body.draw();
    	}
    }
}

Empty = function(location){
	Block.call(this, location);

    this.type = 'empty';
    //this.location = location;
}

Empty.prototype = Object.create(Block.prototype);

Water = function (location){

	Block.call(this, location);

	this.type = 'water';
	//this.location = location;
	this.body = new Body(location, 'blue');
}

Water.prototype = Object.create(Block.prototype);

Lava = function (location){
	
	Block.call(this, location);

	this.type = 'lava';
	//this.location = location;
	this.body = new Body(location, 'red');
	
}
Lava.prototype = Object.create(Block.prototype);