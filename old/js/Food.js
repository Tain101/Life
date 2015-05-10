//Taylor Premo -life 2.0
//Menu.js

/**	Food Objects extends Block
*	Tree extends Food
**/	

Food = function(location){
	Block.call(this, location);
	//this = Block('food');
	this.type = 'food';
	//this.location = location;
	this.body = new Body(location, 'yellow');
	this.eatable = true;

	function eat(){
		return treeFeedRate;//same as tree, since we are planning on removing base food class anyways
	}
}
Food.prototype = Object.create(Block.prototype);

Tree = function(location){
	Food.call(this, location);

	//this = Food(location);
	this.type = 'tree';
	this.alive = true;
	//this.location = location;
	this.fruit = new Fruit(this);
	this.quantity = treeStartingQuantity;

	function update(){
		if(this.alive){
			this.quantity += treeRegrowRate;
			if(tree.quantity <= 0){//see if the tree should die
				tree.alive = false;
				tree.fruit.setDead();
			}
		}
		if(!this.alive){
			this.quantity += treeRegrowRate*treeDeadRegrowModifier;
			if(this.quantity >= treeStartingQuantity){//see if tree should revive
				tree.alive = true;
				this.quantity = treeStartingQuantity;
				tree.fruit.setAlive();
			}
		}
	}

	function eat(){
		tree.quantity -= treeRemoveRate;

		return treeFeedRate;
	}

	this.draw = function(){
		this.body.draw();
		this.fruit.draw();
	}
}
Tree.prototype = Object.create(Food.prototype);

Fruit = function(parent){
	this.location = parent.location;
	this.color = fruitColor;//global
	if(!parent.alive) color = 'black';

	this.fruit = new Circle(location, color);

	function setAlive(){
	//	this = Fruit(this.location, true);
		this.alive = true;
	}

	function setDead(){
	//	this = Fruit(this.location, false);
		this.alive = false;
	}

	this.draw = function(){
		context.beginPath();
		context.arc(this.location.x, this.location.y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = this.color;
		context.fill();
		context.closePath();
	}
}