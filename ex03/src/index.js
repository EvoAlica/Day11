var myPetsArray = ["Dog", "Cat"]

function myArrayFunction(myPets) {

// only change code below this line
var myNewPets = [...myPets];

myPets.push("Bird", "Fish");

var firstPet = myNewPets.shift();

var lastPet = myNewPets.pop();

myNewPets.unshift("Lion");

    return myNewPets;
}

myArrayFunction(myPetsArray);

console.log(myArrayFunction(myPetsArray));

module.exports = myArrayFunction;
