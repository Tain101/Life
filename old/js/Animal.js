//Taylor Premo -life 2.0
//Menu.js

/**	Animal Object extends Block
*	
**/	

Animal = function (location, age, direction, dna, parentA, parentB){
	Block.call(this, location);
	//this = Block('animal');
	this.type = 'animal';
	this.age = age;
	this.location = location;
	this.hunger = 0;
	this.dna = dna;
	this.direction = direction;
	this.body = new Body(location, 'green');
	this.face = new Face(location, direction);
	this.underBlock = null;

	this.parentA = parentA;
	this.parentB = parentB;

	function update(){//
		checkLife();//need to kill animal depending on this

		checkUnder();

		var seenBlock = getBlock(location, direction);
		generateAction(this.dna, this.age, this.hunger, this.underBlock, seenBlock);
		ageYear();
	}

	function ageYear(){//age the animal one year
		this.age ++;
		this.hunger++;
	}

	function checkLife(){//check if animal is still alive
		if(this.underBlock.type == 'lava') return false;
		if(this.age == maxAnimalAge) return false;
		if(this.hunger == maxAnimalHunger) return false;

		return true;
	}

	function checkUnder(){//check what is underneath the animal, and preform apropriate actions
		if(this.underBlock.eatable){//if we can eat it
			this.hunger -= this.underBlock.eat();//eat it
			if(this.hunger < 0) this.hunger = 0;//can't have negative hunger
		}

		if(this.underBlock.sexable){//if we can sex it
			if(checkMatingConditions(this, this.underBlock)) mate();//check if we made a child
		}
	}

	function mate(){//create a Baby
	//we might want to pollute the water, ect.. 
	var b = new Baby(getAdjacent(this.location, 'water'), this, this.underBlock);
	}
}
Animal.prototype = Object.create(Block.prototype);

Baby = function(location, parentA, parentB){
	direction = function(){//generate direction

	}
	dna = function(){//generate dna

	}
	//this = Animal(location, 0, direction, dna)
}

function generateAction(dna, age, hunger, underBlock, seenBlock){//moves animal, if dna decides
	//dna needs to be a unique ID for each animal
	//I need to know if a certain dna[age, hunger, underBlock, seenBlock]
		//needs to be inherited by a parentA or B
}


function checkMatingConditions(animalA, animalB){
	if(!checkAdjacent(animalA.location, 'water') ||//must be next to open water
			animalA.age < minMatingAge ||//can't be too young
			animalB.age < minMatingAge ||
			animalA.age > maxMatingAge ||//can't be too old
			animalB.age > maxMatingAge) {
		return false;
	}
	return true;
}

