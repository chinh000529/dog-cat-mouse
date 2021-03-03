function Cat(name) {
	this.name= name;
}
Cat.prototype.sayHi = function() {
	console.log("Hi! I am a cat, my name is " +this.name);
};
module.exports= Cat;