"use strict";

/* Parent class - Man */
function Man() {
	this.age = 0;
	this.weight = 0;
	this.growth = 0;
}
Man.prototype.setAge = setAge;
Man.prototype.setWeight = setWeight;
Man.prototype.setGrowth = setGrowth;
function setAge(age) {
	this.age = age;
};
function setWeight(weight){
 	this.weight = weight;
};
function setGrowth(growth) {
	this.growth = growth;
};

/* Male Class */
function Male() {
	this.strength = 'strong';
}
Male.prototype = Object.create(Man.prototype);
Male.prototype.constructor = Male;

/* Female */
function Female() {
	this.beauty = 'beautiful';
}
Female.prototype = Object.create(Man.prototype);
Female.prototype.constructor = Female;

Children.prototype = Object.create(Man.prototype);

var male = new Male();
var female = new Female();

debugger;